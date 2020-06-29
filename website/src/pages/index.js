import React from 'react';
import classnames from 'classnames';
import { FiSettings, FiArchive, FiLink, FiUser} from 'react-icons/fi';
import { FaCalendarDay, FaWallet} from "react-icons/fa";
import Layout from '@theme/Layout';
import { MotionLayoutProvider } from 'react-motion-layout';
import Button from './components/Button';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';



const features = [

  {
    title: 'Profile',
    icon: <FiUser size="45" />,
    description: (
      <>
      Create your <Link to="/docs/about/guarantees/">Account</Link> and set your <Link to="/docs/about/guarantees/">profile picture</Link>. Upload your <Link to="/docs/about/guarantees/">verification documents</Link>,
      learn about our <Link to="/docs/about/guarantees/">trust and verification</Link> process, view your <Link to="/docs/about/guarantees/">reviews</Link> or read your <Link to="/docs/about/guarantees/">messages</Link>.
      </>
    ),
  },
  {
    title: 'Shifts',
    icon: <FaCalendarDay size="45" />,
    description: (
      <>
      <Link to="/docs/about/guarantees/">Add</Link> or <Link to="/docs/about/guarantees/">Edit</Link> a new <Link to="/docs/about/guarantees/">listing</Link> and how to <Link to="/docs/about/guarantees/">publish</Link> it. Learn how to set your <Link to="/docs/about/guarantees/">rates</Link>,  <Link to="/docs/about/guarantees/">dates and times</Link> you want to using from your <Link to="/docs/about/guarantees/">calendar</Link>.
      View <Link to="/docs/about/guarantees/">previous</Link> or <Link to="/docs/about/guarantees/">upcoming</Link> Shift information or download and view your <Link to="/docs/about/guarantees/">invoices</Link>
      </>
    ),
  },
  {
    title: 'Settings',
    icon: <FiSettings size="45" />,
    description: (
      <>
      Learn how to change your <Link to="/docs/about/guarantees/">language</Link> preferences or your payment <Link to="/docs/about/guarantees/">currency</Link>.
      Need help with changing your <Link to="/docs/about/guarantees/">password</Link>? View your <Link to="/docs/about/guarantees/">dashboard</Link> and find your <Link to="/docs/about/guarantees/">favorite</Link> locums.

      </>
    ),
  },{
    title: 'Payments',
    icon: <FaWallet size="45" />,
    description: (
      <>
      Set your <Link to="/docs/about/guarantees/">bank account</Link> information in order to receive <Link to="/docs/about/guarantees/">payouts</Link> . View or <Link to="/docs/about/guarantees/">export</Link>  your <Link to="/docs/about/guarantees/">completed</Link>  and <Link to="/docs/about/guarantees/">future</Link>  transactions or download an <Link to="/docs/about/guarantees/">invoice</Link>.
We calculate your <Link to="/docs/about/guarantees/">gross earnings</Link> so you don’t have to.
      </>
    ),
  },
];

function Feature({ title, description, icon }) {
  return (
    <div className={classnames('col col--4 w-full lg:w-1/3 p-4 lg:pt-8 pb-2 lg:border border-gray-200 lg:shadow-sm lg:mr-2 rounded-lg flex flex-col items-center lg:ml-2 text-center', styles.feature)}>
      <div className="pb-4 primary opacity-50">
        { icon }
      </div>
      <h3 className="baloo">{title}</h3>
      <p>{description}</p>
    </div>
  );
}


function Home() {
  return (
    <Layout
      title="React hero animations"
      description="Create beautiful immersive React hero animations."
    >
      <MotionLayoutProvider>
        <header className="bg-gray-200 xl:min-h-screen">
          <div className="flex w-full justify-between flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 md:ml-8 xl:ml-16 ml-0 lg:mt-20 xl:mt-48 p-10 lg:p-0">
              <div className="text-5xl baloo font-bold primary leading-tight">Welcome to Shift'M Help Centre</div>
              <div className="text-4xl text-gray-500 mt-4 leading-tight">
                Have a question or need guidance with something? We're here to help.
              </div>
              <div className="mt-12">
                <Button to="/docs/installation">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

        </header>
        <main>
          {features && features.length && (
            <section className={styles.features}>
              <div className="container lg:pt-12">
                <div className="flex flex-col lg:flex-row">
                  {features.map((props, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}

        </main>
      </MotionLayoutProvider>
    </Layout>
  );
}

export default Home;
