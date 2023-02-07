import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoutButton from '../Auth/LogoutButton';

const userNavigation = [
  { name: 'My Profile', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Notifications', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HeaderAccountNavigation() {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ptRoyal-500 focus:ring-offset-2 lg:rounded-md lg:p-2 lg:hover:bg-gray-50">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="ml-3 hidden text-sm font-medium text-navy-700 lg:block">
            <span className="sr-only ml-3 hidden text-sm font-medium text-navy-700">
              Open user menu for{' '}
            </span>
            Joey
            <FontAwesomeIcon
              icon="fa-regular fa-chevron-down"
              className="ml-2 hidden h-3 w-3 flex-shrink-0 text-navy-400 lg:inline-block"
            />
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
          <LogoutButton />
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
