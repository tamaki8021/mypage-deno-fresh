/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

type Props = {
  title: string;
  date: string;
};

export const Item: FunctionComponent<Props> = ({ title, date }) => {
  return (
    <li>
      <a class={tw`block`}>
        <div class={tw`px-4 py-4 sm:px-6`}>
          <div class={tw`flex items-center justify-between`}>
            <p class={tw`text-lg text-gray-700 dark:text-white md:truncate`}>
              {title}
            </p>
          </div>
          <div class={tw`mt-1 sm:flex sm:justify-between`}>
            <div class={tw`sm:flex`}>
              <p class={tw`flex items-center text-lg font-light text-gray-400`}>
                {date}
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};
