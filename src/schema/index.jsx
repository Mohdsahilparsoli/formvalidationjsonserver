import * as Yup from "yup";

export const singupschema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter name"),
    email:Yup.string().email().required("Please enter email"),
    Paswword:Yup.string().min(7).required("Please enter your password"),
    confirmpassowrd:Yup.string().oneOf([Yup.ref("Paswword"),null,"Passowrd must match"])
})