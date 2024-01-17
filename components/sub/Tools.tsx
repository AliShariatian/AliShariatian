function Tools({ tools }: { tools: string[] }) {
   return (
      <>
         {tools.map((tool) => (
            <div className="py-1 px-4 text-white bg-slate-800 rounded-full">{tool}</div>
         ))}
      </>
   );
}

export default Tools;
