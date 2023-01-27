import { db } from "@/firebaseConfig";
import { VideoCameraIcon } from "@heroicons/react/outline";
import { CameraIcon, EmojiHappyIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRef } from "react";
import firebase from 'firebase/compat/app';

function InputBox() {
    const inputRef = useRef(null);
    const session = useSession();
    const {name, image, email} = session.data.user

    const sendPost = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: name,
            email: email,
            image: image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        inputRef.current.value = '';
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500">
            <div className="flex space-x-4 items-center">
                <Image
                className="rounded-full"
                src={image}
                width={40}
                height={40}
                layout="fixed"
                />
                <form className="flex flex-1 pb-2">
                    <input 
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                        type="text" 
                        placeholder={`What's on your mind, ${name}`}
                        ref={inputRef}
                    />
                    <button hidden type="submit" onClick={sendPost} >Submit</button>
                </form>
            </div>
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>
                <div className="inputIcon">
                    <CameraIcon className="h-7 text-green-400"/>
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300"/>
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox;