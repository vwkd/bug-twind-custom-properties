import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/reset.css" />
      </Head>
      <input
        type="checkbox"
        class="w-6 h-6 checked:bg-sky-500 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-1 focus:ring-sky-500 items-center justify-center after:content-[''] after:w-3 after:h-3 after:origin-bottom-left after:[clip-path:polygon(14%44%,0%65%,50%100%,100%16%,80%0%,43%62%)] checked:after:bg-white"
      />
    </div>
  );
}












