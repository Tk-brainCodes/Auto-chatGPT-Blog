import Trending from "./(home)/Trending";
import Tech from "./(home)/Tech";

export default function Home() {
  return (
    <main className='px-10 leading-7'>
      <Trending />
      <div className='md:flex gap-10 mb-5'>
        <div className='basis-3/4'>
          <Tech />
        </div>
      </div>
    </main>
  );
}
