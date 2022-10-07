const styles = {
    boxWidth: "w-full 2xl:max-w-screen-2xl ",

    heading2:
        "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "md:px-12 lg:px-16 px-6",
    paddingY: "md:px-12 lg:py-16 py-6",
    padding: "md:px-12 lg:px-16 px-6 md:px-12 lg:py-12 py-4",

    marginX: "md:px-12 lg:mx-16 mx-6",
    marginY: "md:px-12 lg:my-16 my-6",
};

export const layout = {
    section: `flex lg:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex lg:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} lg:mr-10 mr-0 lg:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} lg:ml-10 ml-0 lg:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
