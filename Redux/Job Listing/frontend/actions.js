
// export const selectLocation = (city, jobs) => ({
//     type: "SWITCH_LOCATION",
//     city,
//     jobs,
//     }
// );


const selectLocation = (city, jobs) => {
    return {
        type: "SWITCH_LOCATION",
        city,
        jobs,
    };
};

export default selectLocation;
