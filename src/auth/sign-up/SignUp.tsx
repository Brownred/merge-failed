import AuthLayout from "../AuthLayout"
import ButtonNextUI from '../../components/button';
import { Divider } from "@nextui-org/react";



const SignUp = () => {
  return (
    <AuthLayout>
    <div className="font-poppins">
        <div className='flex items-end'>
            <div className="py-6 gap-3 px-3 items-center md:items-start flex flex-col">
                <img src='/Logo.svg' width='100' alt="food logo"/>
                <h1 className="capitalize font-bold lg:min-w-[380px] md:text-[42px] mt-7">Hungry for More?</h1>
                <h2 className="capitalize font-semibold text-gray-700 md:text-4xl">Sign up now!</h2>

                <div>
                <div className="flex items-center md:items-start gap-4 mt-10 flex-col">
                    <ButtonNextUI textVariant="" title="Sign up with Google" type="button" variant="bg-transparent min-w-[330px] border border-black" icon='/google-icon.svg'/>
                    <ButtonNextUI textVariant="" icon="/apple-icon.svg" title="Sign up with Apple" type="button" variant="bg-transparent min-w-[330px] border border-black"/>
                    <div className="flex justify-center md:justify-start items-center max-w-[360px] ">
                        <Divider className="min-w-[31px] lg:ml-[6px] mr-3" />
                        <span className="px-2 text-gray-500">OR</span>
                        <Divider className="min-w-[31px] ml-3"/>
                        </div>
                    <ButtonNextUI textVariant="text-white" title="Sign up with phone or email" type="button" variant="bg-black min-w-[330px]"/>
                    <p className="text-sm max-w-[350px]  lg: mb-10">By signing up, you agree to the <u>Terms of service</u> and <u>privacy policy</u>, including <u>cookie use.</u></p>

                    <p>Already have an account?</p>
                    <ButtonNextUI textVariant="" title="Log in" type="button" variant="bg-transparent min-w-[330px] border border-black"/>
                </div>


                </div>


            </div>
        </div>
    </div>
    </AuthLayout>
  )
}

export default SignUp