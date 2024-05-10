import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import errorAnimation from "./errorLottie.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  const navigate = useNavigate();
  const erAnimation = useRef(null);

  const style = {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    maxWidth: "500px",
  };
  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>FixNexus | Page Not Found</title>
      </Helmet>
      <section className="relative bg-yellow-400/5">
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
              <div className="text-center">
                <Link to={"/"}>
                  <img
                    src="https://i.ibb.co/j5Sqs26/logo.png"
                    className="mx-auto w-64"
                    alt=""
                  />
                </Link>
              </div>
              <div className=" text-center my-auto ">
                <div className="mx-auto ">
                  <Lottie
                    animationData={errorAnimation}
                    style={style}
                    lottieRef={erAnimation}
                    onLoopComplete={() => {
                      erAnimation.current.setDirection(1);
                    }}
                  />
                </div>
                {/* <img
                  src="https://i.ibb.co/SxMVZWM/error.png"
                  className="mx-auto"
                  alt=""
                /> */}
                <h1 className="mt-3 mb-6 md:text-4xl text-3xl font-bold ">
                  Page Not Found?
                </h1>
                <p className="text-slate-400">
                  Whoops, this is embarassing. <br />
                  Looks like the page you were looking for was not found.
                </p>

                <div className="mt-4">
                  <div className="flex items-center justify-center mt-6 gap-x-3">
                    <button
                      onClick={() => navigate(-1)}
                      className="btn w-32 bg-orange-400 hover:bg-orange-500 border-orange-400 hover:border-orange-500 text-slate-900 rounded-md">
                      Go Back
                    </button>

                    <Link
                      to={"/"}
                      className="btn w-32 bg-orange-400 hover:bg-orange-500 border-orange-400 hover:border-orange-500 text-slate-900 rounded-md">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-0 text-slate-400">
                  {new Date().getFullYear()}@ FixNexus. Design with
                  <i className="mdi mdi-heart text-red-600"></i> by{" "}
                  <Link
                    to={"https://github.com/JuborajSujon"}
                    target="_blank"
                    className="text-reset underline">
                    JuborajSujon
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
