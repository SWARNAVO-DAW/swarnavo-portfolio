import portfolio from "../data/portfolio";
import profile from "../assets/profile.jpg";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* Container */}

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8 pt-28">

        {/* LEFT */}

        <div className="w-full lg:w-1/2">

          LEFT CONTENT

        </div>

        {/* RIGHT */}

        <div className="relative hidden w-1/2 items-center justify-center lg:flex">

          RIGHT CONTENT

        </div>

      </div>

    </section>
  );
}

export default Hero;