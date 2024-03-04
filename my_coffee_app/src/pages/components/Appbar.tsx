export function Appbar() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex:2
      }}
    >
      <div className="h-16 rounded-full px-10 m-1 bg-amber-300 shadow-xl ">
        <div className="h-full flex justify-between items-center text-2xl text-slate-700 font-bold">
          <div>Daily Caffine</div>
          <div className="flex text-base font-normal">
            <div className="mx-2 py-2 px-4 border-2 border-amber-300 rounded-full duration-300 hover:border-black"><a href="">Login</a></div>
            <div className="bg-white shadow-md py-2 px-4 border-2 border-white rounded-full duration-300 hover:border-black"> <a href="">SignUp</a> </div>
          </div>
        </div>
      </div>
    </div>
  );
}
