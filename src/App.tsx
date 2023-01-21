import { ChevronDownIcon } from '@heroicons/react/20/solid';
import HelloWorld from './components/HelloWorld';
import Logger from './services/Logger';

function App() {
  Logger.log('Start of the app!');
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <HelloWorld variant="gray" />
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Provider Trust App Starter with Tailwind UI Example
          </h2>
          <h2>Environment Var = {window.REACT_APP_API_URL} PROD-117</h2>
          <p className="mt-5 text-xl text-gray-500">
            This starter includes linting, tailwind ui and prettier code
            formatting, as well as air bnb rules.
          </p>
        </div>
        <div className="mt-10 w-full max-w-xs">
          <label
            htmlFor="currency"
            className="block text-base font-medium text-gray-500"
          >
            Currency
            <div className="relative mt-1.5">
              <select
                id="currency"
                name="currency"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-white bg-none py-2 pl-3 pr-10 text-base text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                defaultValue="United States (USD)"
              >
                <option>Argentina (ARS)</option>
                <option>Australia (AUD)</option>
                <option>United States (USD)</option>
                <option>Canada (CAD)</option>
                <option>France (EUR)</option>
                <option>Japan (JPY)</option>
                <option>Nigeria (NGN)</option>
                <option>Switzerland (CHF)</option>
                <option>United Kingdom (GBP)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <ChevronDownIcon
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
