import { testApi } from "../Api";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const data = await testApi();
  return data;
}

const MainPage = () => {
  const { data } = useLoaderData();
  const renderMainPageContent = data.map(data => {
    const id = data.id;
    const large = data.attributes?.posterImage.large;
    const en = data.attributes?.titles.en;
    return large && en ? (
      <section
        key={id}
        className="section1 h-full flex justify-center items-center"
      >
        <img className=" object-cover w-full h-full" src={large} alt={en} />
      </section>
    ) : (
      false
    );
  });

  return (
    <main className="h-screen mainPageWrapper" id="mainPageWrapper">
      {renderMainPageContent}
    </main>
  );
};

export default MainPage;
