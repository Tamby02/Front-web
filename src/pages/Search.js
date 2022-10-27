function Search(){
    return <>
               <div className="font-serif flex flex-col w-full items-center justify-between ">
                <div className="border-2 border-amber-600 px-12 py-12 rounded-md">
                {/* <div className="inline-block"> */}
                <p className="text-3xl font-bold">Vous pouvez remplir ces informations</p>
                     <div className="flex text-xl items-center font-medium">
                    <label className="ml-4"> Point de depart </label>
                        <input className="rounded-md bg-slate-300 my-3 ml-28 h-[50px]"/>
                    </div>
                    <div className="flex text-xl items-center font-medium">
                        <label className="ml-4">Point d'arrivé</label>
                        <input className="rounded-md bg-slate-300 my-5 ml-32 h-[50px]"/>
                     </div>
                    <div className="flex my-3 justify-center ">
                        <button className="bg-red-800 mx-3 px-5 text-white py-3 text-xl font-bold rounded-lg"> Cout minimal </button>
                        <button className="bg-yellow-600 mx-3 px-5 py-3 text-xl font-bold rounded-lg">Temps minimal</button>
                    </div>
                 </div> 
            </div>
            
    </>
}

export default Search;