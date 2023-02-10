import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Transition, Dialog } from '@headlessui/react';
import { Fragment, useState } from 'react';
import SidebarLogo from './SidebarLogo';
import SidebarNavigation from './SidebarNavigation';

function MobileNavigation() {
  const mobileNavMenuIcon = 'fa-light fa-bars-staggered' as IconProp;
  const closeIcon = 'fa-light fa-xmark' as IconProp;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center border-r border-gray-200 px-4 text-navy-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ptRoyal-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open navigation</span>
        <FontAwesomeIcon
          icon={mobileNavMenuIcon}
          className="h-5 w-5 flex-shrink-0 text-navy-400 lg:hidden"
        />
      </button>

      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="bg-50 fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-[#14233C] pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close navigation</span>
                        <FontAwesomeIcon
                          icon={closeIcon}
                          className="h-5 w-5 flex-shrink-0 text-white"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center">
                    <SidebarLogo />
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <SidebarNavigation />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}

export default MobileNavigation;
