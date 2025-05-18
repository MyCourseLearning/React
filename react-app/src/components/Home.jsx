export default function HomePage() {
  const handleGotoAbout = () => {
    window.location.href = "/about-my-component";
  };
  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleGotoAbout}
      >
        Click Me
      </button>
    </div>
  );
}
