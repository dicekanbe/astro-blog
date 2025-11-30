import React from "react";
import config from "@/config/config.json";
import dateFormat from "@/lib/utils/dateFormat";
import { humanize, slugify } from "@/lib/utils/textConverter";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Fuse from "fuse.js";
import { useEffect, useRef, useState } from "react";
import { BiCalendarEdit, BiCategoryAlt } from "react-icons/bi";
const { summary_length } = config.settings;

export type SearchItem = {
  slug: string;
  data: any;
  content: any;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null,
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = new Fuse(searchList, {
    keys: ["data.title", "data.categories", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    let inputResult = inputVal.length > 2 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);

  return (
    <div className="min-h-[45vh]">
      <Input
        className="text-center"
        placeholder="Type here to Search posts"
        type="text"
        name="search"
        value={inputVal}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        ref={inputRef}
      />

      {inputVal.length > 1 && (
        <div className="my-6 text-center">
          Found {searchResults?.length}
          {searchResults?.length && searchResults?.length === 1
            ? " result"
            : " results"}{" "}
          for '{inputVal}'
        </div>
      )}

      <div className="row">
        {searchResults?.map(({ item }) => (
          <div key={item.slug} className={"col-12 mb-8 sm:col-6"}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {item.data.image && (
                <a
                  href={`/entry/${item.slug}`}
                  className="block overflow-hidden group"
                >
                  <img
                    className="group-hover:scale-[1.03] transition duration-300 w-full"
                    src={item.data.image}
                    alt={item.data.title}
                    width={445}
                    height={230}
                  />
                </a>
              )}

              <CardHeader>
                <ul className="mb-2 flex flex-wrap items-center text-muted-foreground text-sm">
                  <li className="mr-5 flex items-center flex-wrap font-medium">
                    <BiCalendarEdit className="mr-1 h-5 w-5" />
                    <>{dateFormat(item.data.date)}</>
                  </li>
                  <li className="mr-5 flex items-center flex-wrap">
                    <BiCategoryAlt className="mr-1 h-[18px] w-[18px]" />
                    <>
                      <ul>
                        {item.data.categories.map((category: string, i: number) => (
                          <li key={i} className="inline-block">
                            <a
                              href={`/categories/${slugify(category)}`}
                              className="mr-2 hover:text-primary font-medium transition-colors"
                            >
                              {humanize(category)}
                              {i !== item.data.categories.length - 1 && ","}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  </li>
                </ul>

                <CardTitle>
                  <a
                    href={`/entry/${item.slug}`}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {item.data.title}
                  </a>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-base">
                  {item.content?.slice(0, Number(summary_length))}...
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
