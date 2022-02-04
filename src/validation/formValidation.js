import * as yup from 'yup'

const registerSchema = yup.object().shape({
    name: yup.string().required('Campo nome é obrigatório'),
    email: yup.string().email('Insira um E-mail válido').required('Campo E-mail é obrigatório'),
    password: yup.string().required('Campo senha é obrigatório'),
    samePass: yup.string().required('Campo confirme senha é obrigatório')
}).required()

const loginSchema = yup.object().shape({
    email: yup.string().email('Insira um E-mail válido').required('Campo E-mail é obrigatório'),
    password: yup.string().required('Campo senha é obrigatório'),
}).required()

const exitAndRegisterSchema = yup.object().shape({
    value: yup.number().typeError('Insira um valor').required(),
    text: yup.string().required('Insira uma descrição'),
}).required()

export {
    registerSchema,
    loginSchema,
    exitAndRegisterSchema
}