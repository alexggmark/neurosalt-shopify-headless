import AnnouncementBar from "./AnnouncementBar";

export default function Footer() {
  return (
    <div className="page-width">
      <div className="bg-black p-6 rounded-3xl mt-9">
        <div className="rounded-full overflow-hidden">
          <AnnouncementBar />
        </div>
        <div className="min-h-96">

        </div>
      </div>
    </div>
  );
}
