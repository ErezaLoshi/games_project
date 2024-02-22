import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { Icon } from "../Icon/Icon";

interface Props {
  visible?: boolean;
  children: React.ReactNode;
  onClose: () => void;
  showModal: boolean;
  width?: string;
}

export default function Modal(props: Props) {
  return (
    <>
      <Transition appear show={props.showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10 overflow-y: auto" onClose={props.onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
         
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95" 
              >
                <div className="w-full max-w-lg px-10 bg-purplebg rounded-2xl py-5">
                  <div className="absolute flex justify-end w-full max-w-md h-7 right-50">
                    <span
                      onClick={props.onClose}
                      className="absolute cursor-pointer ml-5 mt-1 hover:bg-gray-200 bg-gray-50 rounded-full h-18 w-17 flex items-center justify-center !z-50"
                    >
                      <Icon icon="close" />
                    </span>
                  </div>
                  <h1 className="pb-1">More Info About The Game</h1> 

                <div className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-light mb-2 p-6 text-left align-middle shadow-xl transition-all`}>

                  <div className="relative">{props.children}</div>
                </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
{/* <div className="relative">{props.children}</div> */}
