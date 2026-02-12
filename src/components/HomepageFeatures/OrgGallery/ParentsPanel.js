import styles from "../styles.module.css";

export default function ParentsPanel() {
    return (
        <div className={`${styles.longwrapper} tw-mt-12 tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-8 tw-bg-slate-100 dark:tw-bg-white tw-rounded-lg tw-p-6 tw-shadow-sm`}>
            <div className="tw-text-center">
                <img
                alt="noaaImage"
                src="img/logos/noaa.png"
                style={{ maxHeight: "145px", width: "auto", padding: "1rem" }}
                />
            </div>

            <div className="tw-text-center">
                <img
                alt="awiImage"
                src="img/logos/awi.png"
                style={{ maxHeight: "70px", width: "auto", padding: "1rem" }}
                />
            </div>

            <div className="tw-text-center">
                <img
                alt="cirohImage"
                src="img/logos/ciroh-light.png"
                style={{ maxHeight: "145px", width: "auto", padding: "1rem" }}
                />
            </div>
        </div>
    );
}