import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import useRegisterModal from "@/hooks/useRegisterModal";



import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
    const loginmodal = useLoginModal();
    const registermodal= useRegisterModal()

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

        const onToggle=useCallback(() => {
        if (isLoading) {
            return;
        }
        loginmodal.onClose();
        registermodal.onOpen();

    },[isLoading, registermodal,loginmodal]);

    const onSubmit= useCallback(async() =>{
        try{
         setIsLoading(true);


         loginmodal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginmodal]);

    const bodycontent =(
        <div className="
        flex flex-col gap-4 ">
        <Input 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
        />
       <Input 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
        />
        </div>
    )
    const footercontent =(
        <div className="text-neutral-400 text-center mt-4">
            <p>First time using twitter?
                <span 
                onClick={onToggle}
                className="
                text-white
                cursor-pointer
                hover:underline
    
                "
                >create an account </span>
            </p>
    
        </div>
     )



    return(
        <Modal 
        disabled={isLoading}
        isOpen={loginmodal.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={loginmodal.onClose}
        onSubmit={onSubmit}
        body={bodycontent}
        footer={footercontent}
        />
    );
}

export default LoginModal;