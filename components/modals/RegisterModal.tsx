import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import useRegisterModal from "@/hooks/useRegisterModal";
import {signIn} from "next-auth/react";



import axios from 'axios';
import Input from "../Input";
import Modal from "../Modal";
import toast from "react-hot-toast";

const RegisterModal = () => {
    const loginmodal = useLoginModal();
    const registermodal= useRegisterModal();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [username, setUsername] =useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle=useCallback(() => {
        if (isLoading) {
            return;
        }
        registermodal.onClose();
        loginmodal.onOpen();

    },[isLoading, registermodal,loginmodal]);
    const onSubmit= useCallback(async() =>{
        try{
         setIsLoading(true);

         await axios.post('/api/register',{
            email,
            password,
            username,
            name
         });

          toast.success('Account created')
          

          signIn('credentials',{
            email,
            password

          });


         registermodal.onClose();
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    }, [registermodal, email,password,username,name]);

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
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
        />
      <Input 
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
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
        <p>Already have an account?
            <span 
            onClick={onToggle}
            className="
            text-white
            cursor-pointer
            hover:underline

            "
            >sign in </span>
        </p>

    </div>
 )

    return(
        <Modal 
        disabled={isLoading}
        isOpen={registermodal.isOpen}
        title="create an account"
        actionLabel="Sign in"
        onClose={registermodal.onClose}
        onSubmit={onSubmit}
        body={bodycontent}
        footer={footercontent}
        />
    );
}

export default RegisterModal;                                         