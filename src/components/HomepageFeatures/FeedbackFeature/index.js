import HyperspeedSection from "./HyperspeedSection";
import Link from '@docusaurus/Link';

export default function FeedbackFeature() {
    return (
        <div className="tw-relative tw-z-10 tw-flex tw-justify-center tw-px-6 tw-my-24">
            <div className=" tw-w-full tw-rounded-3xl tw-border-2 tw-shadow-xl tw-transition-all tw-duration-500 tw-backdrop-blur-xl tw-bg-slate-900 tw-border-slate-700">

            <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-14 tw-items-stretch tw-auto-rows-fr">

              {/* TEXT */}
              <div className="tw-space-y-7 tw-mx-10 tw-my-16">
                <h1 className="tw-text-4xl tw-font-extrabold tw-leading-tight tw-text-white">
                  Contribute
                </h1>

                <p className="tw-text-lg tw-leading-relaxed tw-text-white">
                  We welcome CIROH Consortium members to contribute to the CIROH Hub.
                  Add documentation, tutorials, workflows, or conference presentations.
                  The CIROH Hub serves as a shared platform for distributing expertise across
                  the community.{" "}
                  <span className="tw-font-semibold tw-text-yellow-400">
                    Learn how you can contribute and access CIROH's resource and documentation repositories below.
                  </span>
                </p>

                {/* BUTTONS */}
                <div className="tw-flex tw-flex-wrap tw-gap-4 tw-pt-3">

                  {/* BUTTON 1 */}
                  <Link
                    to="/contribute"
                    className="
              tw-inline-block tw-px-7 tw-py-3.5 tw-font-semibold tw-rounded-xl tw-shadow-lg
              tw-transition-all tw-duration-300 tw-text-slate-900 tw-text-sm tw-no-underline

              tw-bg-gradient-to-r tw-bg-slate-50
              hover:tw-bg-white hover:tw-scale-105
            "
                  >
                    How to Contribute?
                  </Link>
                  {/*
                  BUTTON 2 - REINSTATE ONCE MICROSOFT FORMS BACKEND IS FULLY RESTORED
                  <Link
                    to="https://forms.office.com/r/5ww7qRWwwf"
                    target="_blank"
                    className="
              tw-inline-block tw-px-7 tw-py-3.5 tw-font-semibold tw-rounded-xl tw-transition-all tw-duration-300 tw-no-underline
              tw-border-2 tw-bg-transparent tw-border-white tw-text-white
              hover:tw-bg-white hover:tw-text-slate-900
            "
                  >
                    Submit Feedback
                  </Link>
                  */}

                </div>
              </div>

              {/* IMAGE SECTION */}
              <HyperspeedSection />

            </div>
          </div>
        </div>
    );
}