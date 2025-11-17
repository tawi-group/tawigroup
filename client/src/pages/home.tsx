import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';
import StatItem from '@/components/StatItem';
import {
  ChartLine,
  ServerCog,
  Users,
  Lightbulb,
  Database,
  MessageSquare,
  Rocket,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Home() {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Tawi Group - Strategic Consulting for Public Impact';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'We partner with political leaders to design and execute impactful strategies for community transformation. Specializing in grassroots engagement and policy delivery in Kenya.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        'We partner with political leaders to design and execute impactful strategies for community transformation. Specializing in grassroots engagement and policy delivery in Kenya.';
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === 'A' &&
        target.getAttribute('href')?.startsWith('#')
      ) {
        e.preventDefault();
        const elementId = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(elementId || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section
        id='home'
        className='relative min-h-screen flex items-center justify-center overflow-hidden'
      >
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(30, 55, 47, 0.85), rgba(179, 134, 41, 0.2)), url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />

        {/* Floating elements for visual interest */}
        <div className='absolute top-20 left-10 w-20 h-20 bg-tawi-accent/10 rounded-full blur-xl'></div>
        <div className='absolute bottom-20 right-10 w-32 h-32 bg-tawi-accent/10 rounded-full blur-xl'></div>

        <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='text-left'>
              <div className='inline-flex items-center bg-tawi-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6'>
                <span className='text-tawi-accent font-medium text-sm'>
                  Strategic Political Consulting
                </span>
              </div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-6 leading-tight'>
                Where Leadership
                <br />
                <span className='text-tawi-accent bg-gradient-to-r from-tawi-accent to-yellow-400 bg-clip-text text-transparent'>
                  Meets Delivery
                </span>
              </h1>

              <p className='text-xl md:text-2xl text-white/90 mb-8 leading-relaxed'>
                We partner with political leaders across Kenya to design and
                execute impactful strategies for community transformation
                through grassroots engagement and policy delivery.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                <a
                  href='#contact'
                  className='group bg-tawi-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-tawi-accent/90 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center'
                >
                  Request a Consultation
                  <svg
                    className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </a>
                <a
                  href='#about'
                  className='border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-tawi-primary transition-all duration-300 backdrop-blur-sm flex items-center justify-center'
                >
                  Our Story
                </a>
              </div>

              <div className='flex items-center space-x-8 text-white/80'>
                <div className='flex items-center space-x-2'>
                  <div className='w-2 h-2 bg-tawi-accent rounded-full'></div>
                  <span className='text-sm'>Trusted by Leaders</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='w-2 h-2 bg-tawi-accent rounded-full'></div>
                  <span className='text-sm'>Proven Results</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='w-2 h-2 bg-tawi-accent rounded-full'></div>
                  <span className='text-sm'>Local Impact</span>
                </div>
              </div>
            </div>

            <div className='relative lg:block hidden'>
              <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20'>
                <div className='flex items-center mb-6'>
                  <div className='w-12 h-12 bg-tawi-accent rounded-lg flex items-center justify-center mr-4'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-white font-semibold'>
                      Quick Consultation
                    </h3>
                    <p className='text-white/70 text-sm'>
                      Get strategic insights for your next campaign
                    </p>
                  </div>
                </div>

                <div className='space-y-4 text-white/80 text-sm'>
                  <div className='flex items-center'>
                    <svg
                      className='w-4 h-4 text-tawi-accent mr-3'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Community engagement strategies
                  </div>
                  <div className='flex items-center'>
                    <svg
                      className='w-4 h-4 text-tawi-accent mr-3'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Policy implementation roadmaps
                  </div>
                  <div className='flex items-center'>
                    <svg
                      className='w-4 h-4 text-tawi-accent mr-3'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    Stakeholder mobilization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </section>

      {/* Who We Are Section */}
      <section
        id='about'
        className='py-24 bg-white'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-20 items-center'>
            <div className='relative'>
              <div className='absolute -top-4 -left-4 w-24 h-24 bg-tawi-accent/10 rounded-full blur-2xl'></div>
              <img
                src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600'
                alt='Professional team collaboration meeting'
                className='rounded-3xl shadow-2xl w-full h-auto relative z-10'
              />
              <div className='absolute -bottom-6 -right-6 bg-tawi-primary rounded-2xl p-6 shadow-xl z-20'>
                <div className='text-white text-center'>
                  <div className='text-2xl font-bold'>5+</div>
                  <div className='text-sm opacity-90'>Counties Served</div>
                </div>
              </div>
            </div>

            <div className='mt-12 lg:mt-0'>
              <div className='inline-flex items-center bg-tawi-accent/10 rounded-full px-4 py-2 mb-6'>
                <span className='text-tawi-accent font-medium text-sm'>
                  About Tawi Group
                </span>
              </div>

              <h2 className='text-4xl md:text-5xl font-montserrat font-bold text-tawi-primary mb-6 leading-tight'>
                Empowering Leaders,{' '}
                <span className='text-tawi-accent'>
                  Transforming Communities
                </span>
              </h2>

              <p className='text-lg text-tawi-text/80 mb-6 leading-relaxed'>
                Tawi Group is a consulting agency that partners with political
                leaders to design and execute impactful strategies for community
                transformation. We specialize in grassroots engagement, policy
                delivery plans, and campaign alignment with real citizen needs.
              </p>

              <p className='text-lg text-tawi-text/80 mb-8 leading-relaxed'>
                We root our strategies in data, dialogue, and development —
                ensuring leaders don't just win elections, but deliver lasting
                impact for their communities across Kenya.
              </p>

              <div className='bg-tawi-neutral/50 rounded-2xl p-6 mb-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-tawi-primary rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <div>
                      <div className='font-semibold text-tawi-primary'>
                        Trusted Partners
                      </div>
                      <div className='text-sm text-tawi-text/70'>
                        Emerging & seasoned leaders
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-tawi-accent rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                    </div>
                    <div>
                      <div className='font-semibold text-tawi-primary'>
                        Local Networks
                      </div>
                      <div className='text-sm text-tawi-text/70'>
                        Deep roots across Kenya
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <a
                  href='#services'
                  className='inline-flex items-center justify-center bg-tawi-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-tawi-primary/90 transition-all duration-300'
                >
                  Explore Our Services
                  <svg
                    className='ml-2 w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </a>
                <a
                  href='#contact'
                  className='inline-flex items-center justify-center border-2 border-tawi-primary text-tawi-primary px-6 py-3 rounded-xl font-semibold hover:bg-tawi-primary hover:text-white transition-all duration-300'
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        id='services'
        className='py-24 bg-gradient-to-br from-gray-50 to-tawi-neutral/30'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <div className='inline-flex items-center bg-tawi-primary/10 rounded-full px-6 py-2 mb-6'>
              <span className='text-tawi-primary font-medium'>
                Our Expertise
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-montserrat font-bold text-tawi-primary mb-6'>
              Transforming Vision Into Action
            </h2>
            <p className='text-xl text-tawi-text/70 max-w-3xl mx-auto leading-relaxed'>
              We provide comprehensive political consulting services that
              empower leaders to create meaningful change in their communities
              across Kenya.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mb-16'>
            <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group'>
              <div className='flex items-start space-x-4'>
                <div className='w-16 h-16 bg-gradient-to-br from-tawi-primary to-tawi-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <Users className='text-white text-2xl' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-montserrat font-bold text-tawi-primary mb-4'>
                    Community Project Design
                  </h3>
                  <p className='text-tawi-text/70 leading-relaxed mb-4'>
                    Tailored programs that build credibility before campaigns
                    and create lasting community impact through strategic
                    grassroots initiatives.
                  </p>
                  <ul className='space-y-2 text-sm text-tawi-text/60'>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Community needs assessment
                    </li>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Project implementation strategy
                    </li>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Impact measurement systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group'>
              <div className='flex items-start space-x-4'>
                <div className='w-16 h-16 bg-gradient-to-br from-tawi-primary to-tawi-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <ChartLine className='text-white text-2xl' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-montserrat font-bold text-tawi-primary mb-4'>
                    Constituency Delivery Planning
                  </h3>
                  <p className='text-tawi-text/70 leading-relaxed mb-4'>
                    Transforming manifestos into measurable, trackable action
                    plans that deliver real results for constituents.
                  </p>
                  <ul className='space-y-2 text-sm text-tawi-text/60'>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Manifesto to action roadmaps
                    </li>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Performance tracking systems
                    </li>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Stakeholder accountability frameworks
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group'>
              <div className='flex items-start space-x-4'>
                <div className='w-16 h-16 bg-gradient-to-br from-tawi-primary to-tawi-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <Lightbulb className='text-white text-2xl' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-montserrat font-bold text-tawi-primary mb-4'>
                    Campaign Visibility & Voter Mobilization
                  </h3>
                  <p className='text-tawi-text/70 leading-relaxed mb-4'>
                    Strategic branding and messaging rooted in local realities
                    to maximize voter engagement and campaign effectiveness.
                  </p>
                  <ul className='space-y-2 text-sm text-tawi-text/60'>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Local messaging strategies
                    </li>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Voter mobilization campaigns
                    </li>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Digital and traditional media integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group'>
              <div className='flex items-start space-x-4'>
                <div className='w-16 h-16 bg-gradient-to-br from-tawi-primary to-tawi-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <ServerCog className='text-white text-2xl' />
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-montserrat font-bold text-tawi-primary mb-4'>
                    Stakeholder Engagement
                  </h3>
                  <p className='text-tawi-text/70 leading-relaxed mb-4'>
                    Mobilizing NGOs, CBOs, and government bodies for effective
                    partnerships and collaborative governance.
                  </p>
                  <ul className='space-y-2 text-sm text-tawi-text/60'>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Partnership development
                    </li>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Multi-stakeholder platforms
                    </li>
                    <li className='flex items-center'>
                      <div className='w-2 h-2 bg-tawi-accent rounded-full mr-3'></div>
                      Collaborative governance models
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <a
              href='#contact'
              className='inline-flex items-center bg-tawi-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-tawi-primary/90 transition-all duration-300 shadow-lg'
            >
              Discuss Your Project
              <svg
                className='ml-2 w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className='py-20 bg-tawi-primary'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-montserrat font-bold text-white mb-6'>
              Our Approach
            </h2>
            <p className='text-xl text-white/80 max-w-3xl mx-auto'>
              Our proven methodology combines three essential elements for
              sustainable transformation
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-12'>
            <div className='text-center group'>
              <div className='w-24 h-24 bg-tawi-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tawi-accent/30 transition-colors duration-300'>
                <Database className='text-tawi-accent text-3xl' />
              </div>
              <h3 className='text-2xl font-montserrat font-semibold text-white mb-4'>
                Data
              </h3>
              <p className='text-white/80 leading-relaxed'>
                Evidence-based insights drive every recommendation. We leverage
                advanced analytics to uncover patterns and opportunities that
                inform strategic decisions.
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-24 h-24 bg-tawi-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tawi-accent/30 transition-colors duration-300'>
                <MessageSquare className='text-tawi-accent text-3xl' />
              </div>
              <h3 className='text-2xl font-montserrat font-semibold text-white mb-4'>
                Dialogue
              </h3>
              <p className='text-white/80 leading-relaxed'>
                Meaningful stakeholder engagement ensures buy-in and sustainable
                implementation. We facilitate conversations that build consensus
                and drive action.
              </p>
            </div>

            <div className='text-center group'>
              <div className='w-24 h-24 bg-tawi-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tawi-accent/30 transition-colors duration-300'>
                <Rocket className='text-tawi-accent text-3xl' />
              </div>
              <h3 className='text-2xl font-montserrat font-semibold text-white mb-4'>
                Development
              </h3>
              <p className='text-white/80 leading-relaxed'>
                Continuous improvement and capacity building create lasting
                organizational change. We don't just consult—we develop internal
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tawi Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-montserrat font-bold text-tawi-primary mb-6'>
              Why Choose Tawi?
            </h2>
          </div>

          <div className='bg-tawi-neutral rounded-2xl p-8 md:p-12'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center'>
              <StatItem
                value='Trusted'
                label='By Leaders'
                description='Emerging and seasoned political leaders'
              />
              <StatItem
                value='Deep'
                label='Local Networks'
                description="Across Kenya's diverse regions"
              />
              <StatItem
                value='Proven'
                label='Track Record'
                description='In Lamu, Kilifi, Kajiado & beyond'
              />
            </div>

            <div className='mt-12 text-center'>
              <blockquote className='text-xl md:text-2xl text-tawi-text italic mb-6 max-w-4xl mx-auto'>
                "Tawi Group helped us transform our constituency engagement
                strategy. Their deep understanding of local dynamics and
                practical approach delivered tangible results for our
                community."
              </blockquote>
              <div className='flex items-center justify-center space-x-4'>
                <img
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150'
                  alt='Client testimonial'
                  className='w-12 h-12 rounded-full'
                />
                <div className='text-left'>
                  <div className='font-semibold text-tawi-primary'>
                    Joseph Mwangi
                  </div>
                  <div className='text-sm text-tawi-text/70'>
                    County Assembly Member, Kiambu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-24'
        style={{ backgroundColor: '#1E372F' }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6'>
              <span className='text-white font-medium'>Get In Touch</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-montserrat font-bold text-white mb-6'>
              Ready to Transform Your Community?
            </h2>
            <p className='text-xl text-white max-w-3xl mx-auto leading-relaxed'>
              Let's discuss how Tawi Group can help you achieve your political
              objectives through strategic consulting and community engagement.
            </p>
          </div>

          <div className='lg:grid lg:grid-cols-5 lg:gap-12 items-start'>
            <div className='lg:col-span-2 mb-12 lg:mb-0'>
              <div className='bg-white/15 backdrop-blur-lg rounded-2xl p-8 border border-white/30'>
                <h3 className='text-2xl font-montserrat font-bold text-white mb-6'>
                  Contact Information
                </h3>

                <div className='space-y-6'>
                  <div className='flex items-start space-x-4'>
                    <div
                      className='w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0'
                      style={{ backgroundColor: '#B38629' }}
                    >
                      <Phone className='text-white w-5 h-5' />
                    </div>
                    <div>
                      <div className='font-semibold text-white'>Phone</div>
                      <div className='text-white/80'>
                        <a href='tel:+25448136089'>+254 48 136089</a>
                      </div>
                      <div className='text-white/60 text-sm mt-1'>
                        Mon-Fri 8AM-6PM EAT
                      </div>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div
                      className='w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0'
                      style={{ backgroundColor: '#B38629' }}
                    >
                      <Mail className='text-white w-5 h-5' />
                    </div>
                    <div>
                      <div className='font-semibold text-white'>Email</div>
                      <div className='text-white/80'>
                        <a href='mailto:tawi.group.1@gmail.com'>
                          tawi.group.1@gmail.com
                        </a>
                      </div>
                      <div className='text-white/60 text-sm mt-1'>
                        Response within 24 hours
                      </div>
                    </div>
                  </div>

                  <div className='flex items-start space-x-4'>
                    <div
                      className='w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0'
                      style={{ backgroundColor: '#B38629' }}
                    >
                      <MapPin className='text-white w-5 h-5' />
                    </div>
                    <div>
                      <div className='font-semibold text-white'>Office</div>
                      <div className='text-white/80'>OBC Kitengela</div>
                      <div className='text-white/80'>Namanga Road</div>
                      <div className='text-white/60 text-sm mt-1'>
                        By appointment
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-8 pt-6 border-t border-white/20'>
                  <div className='text-white/80 text-sm mb-4'>
                    Follow us on social media
                  </div>
                  <div className='flex space-x-4'>
                    <a
                      href='https://instagram.com/tawigroup'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tawi-accent transition-colors duration-200'
                    >
                      <svg
                        className='w-5 h-5 text-white'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                      </svg>
                    </a>
                    <a
                      href='https://twitter.com/tawigroup'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tawi-accent transition-colors duration-200'
                    >
                      <svg
                        className='w-5 h-5 text-white'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                      </svg>
                    </a>
                    <a
                      href='https://facebook.com/tawigroup'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tawi-accent transition-colors duration-200'
                    >
                      <svg
                        className='w-5 h-5 text-white'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:col-span-3'>
              <div className='bg-white rounded-3xl shadow-2xl overflow-hidden'>
                <div className='p-8'>
                  <h3 className='text-2xl font-montserrat font-bold text-tawi-primary mb-2'>
                    Start Your Project
                  </h3>
                  <p className='text-tawi-text/70 mb-6'>
                    Fill out the form below and we'll get back to you within 24
                    hours to discuss your political consulting needs.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
