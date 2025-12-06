import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import kuromoji from 'kuromoji';

const postsDir = './src/content/posts';
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));

// kuromoji のトークナイザーを初期化（非同期）
const tokenizerPromise = new Promise((resolve, reject) => {
  kuromoji.builder({ dicPath: 'node_modules/kuromoji/dict' }).build((err, tokenizer) => {
    if (err) reject(err);
    else resolve(tokenizer);
  });
});

async function processFiles() {
  const tokenizer = await tokenizerPromise;

  for (const file of files) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(content);

    // Generate tags based on title and categories
    const title = parsed.data.title || '';
    const categories = parsed.data.categories || [];
    let tags = [...categories];

    // Add more based on title keywords
    const keywords = {
      'スクワット': ['スクワット', '筋トレ', 'フィットネス'],
      'ベンチプレス': ['ベンチプレス', '胸筋', '筋トレ'],
      '筋トレ': ['筋トレ', 'フィットネス', 'トレーニング'],
      'フィットネス': ['フィットネス', '健康', '運動'],
      '自己紹介': ['自己紹介', 'プロフィール', '雑記'],
      '読書': ['読書', '学習', '習慣'],
      '瞑想': ['瞑想', 'マインドフルネス', 'リラクゼーション'],
      'アニメ': ['アニメ', 'エンターテイメント', '趣味'],
      'ジム': ['ジム', 'トレーニング', 'フィットネス'],
      '食事': ['食事', '栄養', '健康'],
      '旅行': ['旅行', '体験', '思い出'],
      '技術': ['技術', 'プログラミング', '開発'],
      'ブログ': ['ブログ', '執筆', '情報発信'],
      'ヨガ': ['ヨガ', 'フィットネス', 'リラクゼーション'],
      'ダイエット': ['ダイエット', '健康', '食事'],
      '映画': ['映画', 'エンターテイメント', '趣味'],
      'Mac': ['Mac', '技術', 'ツール'],
      'Windows': ['Windows', '技術', 'ツール'],
      '水泳': ['水泳', 'フィットネス', '健康'],
      '断捨離': ['断捨離', 'ライフハック', '整理'],
      '潜在意識': ['潜在意識', 'マインド', '自己啓発'],
      'アマゾン': ['アマゾン', 'ショッピング', 'レビュー'],
      'アドセンス': ['アドセンス', 'ブログ', '収益化'],
      'アソシエイト': ['アソシエイト', 'ブログ', 'アフィリエイト'],
      'プロテイン': ['プロテイン', '栄養', 'サプリメント'],
      'サプリメント': ['サプリメント', '健康', '栄養'],
      '発酵食品': ['発酵食品', '食事', '健康'],
      'バナナ': ['バナナ', '食事', '栄養'],
      'コーヒー': ['コーヒー', '食事', '飲料'],
      'イヤホン': ['イヤホン', 'ツール', 'ガジェット'],
      'キーボード': ['キーボード', 'ツール', 'ガジェット'],
      '英語': ['英語', '学習', 'スキル'],
      'プログラミング': ['プログラミング', '技術', '開発'],
      'jQuery': ['jQuery', 'プログラミング', 'web'],
      'HTML': ['HTML', 'web', '技術'],
      'CSS': ['CSS', 'web', '技術'],
      'JavaScript': ['JavaScript', 'web', 'プログラミング'],
      'Python': ['Python', 'プログラミング', '開発'],
      'Node.js': ['Node.js', 'プログラミング', 'web'],
      '台湾': ['台湾', '旅行', '体験'],
      '愛媛': ['愛媛', '地域', 'ふるさと'],
      '松山': ['松山', '地域', '愛媛'],
      'イベント': ['イベント', '体験', 'イベント'],
      '映画鑑賞': ['映画鑑賞', '映画', 'エンターテイメント'],
      'マンガ': ['マンガ', 'エンターテイメント', '趣味'],
      '小説': ['小説', '読書', 'エンターテイメント'],
      'ポイント': ['ポイント', 'ショッピング', '節約'],
      'コンビニ': ['コンビニ', 'ショッピング', '日常'],
      'ガジェット': ['ガジェット', 'ツール', '技術'],
      'ライフハック': ['ライフハック', '生活', '工夫'],
      '生活': ['生活', 'ライフスタイル', '日常'],
      'ライフスタイル': ['ライフスタイル', '生活', '習慣'],
      '習慣': ['習慣', 'ライフスタイル', '自己改善'],
      '朝活': ['朝活', '習慣', '自己改善'],
      'チャレンジ': ['チャレンジ', '目標', '自己改善'],
      '目標': ['目標', '自己改善', 'モチベーション'],
      '自己改善': ['自己改善', 'モチベーション', '成長'],
      'モチベーション': ['モチベーション', '自己改善', 'マインド'],
      '成長': ['成長', '自己改善', 'キャリア'],
      'キャリア': ['キャリア', '仕事', '成長'],
      '仕事': ['仕事', 'キャリア', 'ビジネス'],
      'ビジネス': ['ビジネス', 'キャリア', '経営'],
      '経営': ['経営', 'ビジネス', '起業'],
      '起業': ['起業', 'ビジネス', '経営'],
      '節約': ['節約', 'お金', 'ライフハック'],
      'お金': ['お金', '節約', 'ビジネス'],
      'セール': ['セール', 'ショッピング', 'お金'],
      'レビュー': ['レビュー', 'ショッピング', 'レビュー'],
      'おすすめ': ['おすすめ', 'レビュー', '情報発信'],
      'トレンド': ['トレンド', '情報', '最新'],
      '情報': ['情報', 'トレンド', 'ニュース'],
      'ニュース': ['ニュース', '情報', '時事'],
      '時事': ['時事', 'ニュース', '情報'],
      'インターネット': ['インターネット', '技術', 'web'],
      'web': ['web', 'インターネット', '技術'],
      'SEO': ['SEO', 'web', 'ブログ'],
      'マーケティング': ['マーケティング', 'ビジネス', 'web'],
      'ソーシャルメディア': ['ソーシャルメディア', 'web', '情報発信'],
      'Twitter': ['Twitter', 'ソーシャルメディア', 'web'],
      'Instagram': ['Instagram', 'ソーシャルメディア', 'web'],
      'Facebook': ['Facebook', 'ソーシャルメディア', 'web'],
      'ストレス': ['ストレス', '心理', '健康'],
      '心理': ['心理', 'ストレス', 'メンタルヘルス'],
      'メンタルヘルス': ['メンタルヘルス', '心理', '健康'],
      'リラクゼーション': ['リラクゼーション', '瞑想', 'ストレス対策'],
      'ストレス対策': ['ストレス対策', 'ストレス', 'リラクゼーション']
    };

    for (const [key, tagList] of Object.entries(keywords)) {
      if (title.includes(key) || content.includes(key)) {
        tags = tags.concat(tagList);
      }
    }

    // NLP: 本文から名詞を抽出
    const bodyContent = parsed.content; // フロントマターを除いた本文
    const tokens = tokenizer.tokenize(bodyContent);
    const nouns = tokens
      .filter(token => token.pos === '名詞' && (token.pos_detail_1 === '一般' || token.pos_detail_1 === '固有名詞' || token.pos_detail_1 === 'サ変接続' || token.pos_detail_1 === '形容動詞語幹')) // 適切な名詞のみ
      .map(token => token.surface_form) // 単語を取得
      .filter(noun => noun.length >= 2 && /^[一-龯ぁ-んァ-ン]+$/.test(noun) && !['こと', 'もの', 'それ', 'これ', 'ここ', 'そこ', 'あそこ', 'こちら', 'こちら', 'こちら', '最近', '普段', '昨今', '方法', 'こちら', '紹介', '約束', '以前', '再開', '使い勝手', '可能', '利用', '形容', '接続', '奇妙', '補給', 'hot', '信頼', '設定', '記載', 'iframe', 'MacBook', '普通', '運用', '審査', '処理', 'Finder', 'ぼんやり', 'Realforce', '機能', '沖縄', 'by', 'psypanica'].includes(noun)) // 日本語のみ、一般語除外
      .slice(0, 5); // 最大5個
    tags = tags.concat(nouns);

    // Unique and limit to 3-5
    tags = [...new Set(tags)].slice(0, 5);
    if (tags.length < 3) {
      tags = tags.concat(['雑記', 'ブログ', '日記']).slice(0, 5);
    }

    parsed.data.tag = tags;
    
    // Convert date from UTC to JST (+09:00) with proper format
    if (parsed.data.date) {
      const dateObj = new Date(parsed.data.date);
      // Add 9 hours for JST conversion
      const jstTime = new Date(dateObj.getTime() + 9 * 60 * 60 * 1000);
      // Format: YYYY-MM-DDTHH:MM:SS+09:00
      const year = jstTime.getUTCFullYear();
      const month = String(jstTime.getUTCMonth() + 1).padStart(2, '0');
      const day = String(jstTime.getUTCDate()).padStart(2, '0');
      const hours = String(jstTime.getUTCHours()).padStart(2, '0');
      const minutes = String(jstTime.getUTCMinutes()).padStart(2, '0');
      const seconds = String(jstTime.getUTCSeconds()).padStart(2, '0');
      parsed.data.date = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+09:00`;
    }
    
    const newContent = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${file} with tags: ${tags.join(', ')}`);
  }
}

processFiles().catch(console.error);