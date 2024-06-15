import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border- border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul>
            {resourcesLinks.map((item, index) => (
              <li key={index} className="space-y-2">
                <a href={item.href} className=" text-neutral-300 hover:text-neutral-500 transition duration-200">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul>
            {platformLinks.map((item, index) => (
              <li key={index} className="space-y-2">
                <a href={item.href} className=" text-neutral-300 hover:text-neutral-500 transition duration-200">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul>
            {communityLinks.map((item, index) => (
              <li key={index} className="space-y-2">
                <a href={item.href} className=" text-neutral-300 hover:text-neutral-500 transition duration-200">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
