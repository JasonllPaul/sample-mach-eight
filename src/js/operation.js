export const findUser = (data, inData) => {
    console.log("::in",inData);
    let response = data.filter(element => element.h_in === inData?.toString());
    return response;
}