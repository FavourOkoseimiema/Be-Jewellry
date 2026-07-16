function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-950 animate-fadeIn">
      <img
        src="/images/Loader.jpg"
        alt="Loading..."
className="w-64 md:w-80 animate-[pulse_2s_ease-in-out_infinite]"      />
    </div>
  );
}

export default Loader;