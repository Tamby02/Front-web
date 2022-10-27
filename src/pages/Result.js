function Result(){
    return (
      <>
        {" "}
        <div className="font-serif">
          {/* <h2 className="items-center"> Vous pouvez trouver ces resultats</h2> */}
          <div className="flex items-center">
            <h2 className="font-bold">Bus</h2>
            <div className="ml-32">
              <input className="rounded-md bg-slate-300 my-3 ml-28 h-[50px]" />
              <input className="rounded-md bg-slate-300 my-3 ml-28 h-[50px]" />
            </div>
          </div>
          <div className="flex items-center">
            <h2 className="font-bold">Trajet</h2>
            <div className="ml-24">
              <input className="rounded-md bg-slate-300 my-3 ml-28 h-[50px]" />
              <input className="rounded-md bg-slate-300 my-3 ml-28 h-[50px]" />
            </div>
          </div>
          <div className="flex items-center">
            <h2 className="font-bold">Distance</h2>
            <input className="rounded-md bg-slate-300 my-3 ml-44 h-[50px] w-[500px]" />
          </div>
          <div className="flex items-center">
            <h2 className="font-bold">Temps</h2>
            <input className="rounded-md bg-red-800 opacity-50 my-3 ml-52 h-[50px] w-[500px]" />
          </div>
          <div className="flex items-center">
            <h2 className="font-bold">Cout minimal</h2>
            <input className="rounded-md bg-yellow-600 opacity-50 my-3 ml-28 h-[50px] w-[500px]" />
          </div>
        </div>
      </>
    );
}

export default Result;