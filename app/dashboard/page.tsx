import LeafletMap from "./components/LeafLetMap";

export default function Dashboard() {
  return (
    <section className="dashboard relative  h-screen overflow-hidden ">
      <LeafletMap />
      <div className="left absolute z-30 top-4 left-4 w-80 h-175 bg-white rounded-md"></div>
      <div className="right absolute z-30 top-2 right-2 w-50 h-100 bg-white rounded-md"></div>
    </section>
  );
}
