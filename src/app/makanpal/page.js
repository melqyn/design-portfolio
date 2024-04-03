import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import makanPalHeader from '../images/makanpalheader.png'
import CSInfo from "../components/CSInfo";
import CSTitleParagraph from "../components/CSTitleParagraph";

export default function makanpal() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFBFA]">
      <Navbar/>
      <div className="bg-[#FFF5E0]">
        <div className="container grid grid-cols-1 md:grid-cols-12 mt-36 mx-auto py-4 pl-12">
          <div className="col-span-12">
          <Image src={makanPalHeader}
                  width={500}
                  height={500}
                  alt="makanpal image"
                  className="hidden  md:block md:absolute md:top-0 md:right-0 md:-mr-12" ></Image>
            <h1 className='text-[#574F4A] text-3xl font-bold pb-8'>MakanPal</h1>
          </div>
        
          <div className="col-span-5">
            <p className='text-[#574F4A] font-light pb-8 md:pb-16'>A virtual queuing system to reduce physical queue times for staff during lunch hours.</p>
          </div>
        </div>
        
      </div>

      <div className="container mx-auto grid grid-cols-12 py-8 px-12">
        <div className="col-span-5 md:col-span-3 flex-col justify-start">
          <h4 className="text-xs font-semibold text-[#B0B0B0] pb-2">Project Type</h4>
          <p className="text-xs text-[#636363]">Internship Team Project (5pax)</p>
        </div>

        <div className="col-span-3 md:col-span-1 flex-col justify-start">
          <h4 className="text-xs font-semibold text-[#B0B0B0] pb-2">Tool</h4>
          <p className="text-xs text-[#636363]">Figma</p>
        </div>

        <div className="col-span-4 md:col-span-1 flex-col justify-start">
          <h4 className="text-xs font-semibold text-[#B0B0B0] pb-2">Timeline</h4>
          <p className="text-xs text-[#636363]">Feb-May 2023</p>
        </div>
      </div>

      <div className="container mt-24 mx-auto px-12">
        <CSInfo 
          context={`MakanPal is an in-house staff canteen application aimed at reducing physical queue wait times for staff during lunch hours with a virtual queuing system. 
            The project was developed via Agile Scrum methodology. As an in-house project, we received directions and discussed with the Human Resource Department (HRD) as our “client”. We successfully launched the application over a one-week trial period, reaching out to 200+ staff.`}
          role="As the team’s sole designer, I led the UI/UX design of the application for all three platforms: staff mobile app, merchant tablet app and kiosk tablet app. I also contributed to product design by scoping features and project direction."
        />

        <h2 className="text-xl font-semibold text-[#363636] pb-2">Concept of Virtual Queuing</h2>
        <p className="text-[#636363] leading-relaxed pb-8">
          To help you better understand this case study about a virtual queuing system, I will first explain the project concept of a virtual queue, and the contextual challenges it entails.
        </p>

        <div className="pb-16">
          <div className="container mx-auto py-4 px-8 grid grid-cols-3 mb-4 bg-[#EAEAEA] text-[#363636] rounded-xl">
            <div className="col-span-1 font-semibold">
              <p>Virtual Ordering (VO)</p>
            </div>
            <div className="col-span-2 pl-16">
              <p>Ordering (and paying) through an app</p>
            </div>
          </div>
          <div className="container mx-auto py-4 px-8 grid grid-cols-3 text-[#363636]
            bg-[#FBC34E] bg-opacity-20 border-[#FBC34E] border-2 rounded-xl">
            <div className="col-span-1 font-semibold">
              <p>Virtual Queuing (VQ) =</p>
            </div>
            <div className="col-span-2">
              <ol className="list-decimal pl-16">
                <li>Taking a queue number via an application</li>
                <li>Waiting for your turn (anywhere!)</li>
                <li>(At your turn) Joining the physical queue at the stall</li>
                <li>Ordering from and paying directly to merchants in-person</li>
              </ol>
            </div>
          </div>
         </div>

        <CSTitleParagraph title="The Problem"
        paragraph="Long queue in the staff canteen were reported to be unproductive. User groups with strict lunch timings such as cabin crew are unable to purchase food from popular stalls."/>

        <CSTitleParagraph title="Contextual Challenge" columns={2}
          largetitle="Managing User Expectations: Transitioning from Physical to Digital"
          paragraph="With the rise of food deliveries services, most users were used to ordering their food through an app. However, VQ - queuing without ordering - remains a new concept to most staff. To smoothen out the transition to a virtual queue, we recognised the need to manage users’ expectations. How do we educate the staff about the VQ concept?"
          paragraph2="Queue management was another issue to address - How can we ensure users in queue come down to the stall punctually at their turn? How can we prevent them from coming down to the stalls too late? What happens if they miss their queue turn?"
        />
        <CSTitleParagraph title={`User Groups`}
        paragraph={`It is important to note that the application has two interfaces each catering to one of the two user groups:`}/>

        <Image src={"/app/makanpal/images/usergroupsbig.png"}
          width={800}
          height={200}
          alt="user groups"/>

        <CSTitleParagraph title={`The Process`}
        paragraph={`This project was kickstarted by the previous batch of interns who developed a mid-fidelity prototype and held a one-day virtual queuing trial. Using their prototype as a starting point, here is what we did:`}/>

        <Image src={"/images/process.png"}
          width={800}
          height={200}
          alt="process"/>
        
        <CSTitleParagraph largetitle={`1. Review Feedback from Handover`}
        paragraph={`Here are some key observations and feedback on existing prototype (by previous interns):`}/>
        
        <div className="pb-8">
        <table class="text-left text-sm font-light text-surface dark:text-white">
          <thead class="border-b border-neutral-200 bg-[#FBC34E] font-medium text-white dark:border-white/10">
            
              <th class=" px-6 py-4">Observations</th>
              <tc class=" px-6 py-4"><th class=" px-6 py-4">Problems</th>
              <tr><th class=" px-6 py-4">Impact on Staff</th><th class=" px-6 py-4">Impact on Merchant Ops</th></tr>
              </tc>
            
          </thead>

          <tbody>
            <tc>
              <ul>
                <li class="whitespace-nowrap  px-6 py-4">gave estimated time period that did not reflect real-time status</li>
                <li class="whitespace-nowrap  px-6 py-4">no current queue number of stall for estimation (just like in physical queue)</li>
                <li class="whitespace-nowrap  px-6 py-4">no option to “leave” virtual queue</li>
              </ul>
            </tc>
            <tc>
            <ul>
                <li class="whitespace-nowrap  px-6 py-4">gave estimated time period that did not reflect real-time status</li>
                <li class="whitespace-nowrap  px-6 py-4">no current queue number of stall for estimation (just like in physical queue)</li>
                <li class="whitespace-nowrap  px-6 py-4">no option to “leave” virtual queue</li>
              </ul>
            </tc>
            <tc>
            <ul>
                <li class="whitespace-nowrap  px-6 py-4">gave estimated time period that did not reflect real-time status</li>
                <li class="whitespace-nowrap  px-6 py-4">no current queue number of stall for estimation (just like in physical queue)</li>
                <li class="whitespace-nowrap  px-6 py-4">no option to “leave” virtual queue</li>
              </ul>
            </tc>
          </tbody>
        </table></div>

        <p className="text-[#636363] leading-relaxed pb-8">From here, I generated some How Might We (HMW) questions to frame problems for ideation for our two user groups: staff (mobile app and kiosk), merchants (merchant app).</p>
        <div className="border-[#76655B] border-l-4 px-4 mb-4 leading-relaxed">
          <p className="text-[#76655B] font-semibold">For staff user group:</p>
          <p className="text-[#76655B]">HMW help users feel confident that their queue ticket is valid and moving?</p>
          <p className="text-[#76655B]">HMW help users join the physical queue ideal intervals?</p>
        </div>

        <div className="border-[#76655B] border-l-4 px-4 leading-relaxed mb-16">
          <p className="text-[#76655B] font-semibold">For merchant user group:</p>
          <p className="text-[#76655B]">HMW help merchants adapt to technology by minimising changes to the merchants workflow?</p>
          <p className="text-[#76655B]">HMW help merchants regulate the queue?</p>
          <p className="text-[#76655B]">HMW help merchants easily gauge the virtual queue?</p>
        </div>

        <CSTitleParagraph largetitle={`2. Defining User Flow`}/>
        <Image src="/images/userflow.png"
                width={400}
                height={300}
                alt="User Flow"/>

        <CSTitleParagraph largetitle={`3. Agile Development - Designing in Agile Scrum`}
        paragraph={`Designing in an Agile Scrum environment with concurrent prototype development, I had to focus on producing development-ready high-fidelity Figma prototypes. This meant that I had to adapt my design processes to fit Agile Scrum development: instead of focusing on producing basic designs of the multiple functional screens before moving into the details, I prioritised designing each specific function one at a time. One thing that worked for me was designing multiple iterations of the same feature so that I can maximise the feedback gathered during each daily stand-up to produce higher quality designs each sprint.`}/>
        
        <Image src="/images/parallelproto.png"
                width={400}
                height={300}
                alt="Designing multiple versions"/>

        <CSTitleParagraph largetitle={"4. Staff Mobile App Testing: Internal Department Review + Guerrilla User Testing"}
        paragraph={"We conducted Guerrilla User Testing in the canteen, interviewing a total of 30 staff. Some key sentiments are as follows:"}/>

        <div className="grid grid-cols-12 gap-4 pb-16">
          <div className="col-span-4 p-4 rounded-xl bg-[#FBC34E] bg-opacity-20">
            <p>“I clicked too fast and did not see the queue status from the previous [stall selection] page”</p>
          </div>
          <div className="col-span-4 p-4 rounded-xl bg-[#FBC34E] bg-opacity-20">
            <p>“I could not tell the difference between the two screens [when queue time decreased to below 5 minutes]”</p>
          </div>

          <div className="col-span-4 p-4 rounded-xl bg-[#FBC34E] bg-opacity-20">
            <p>“Oh, I thought this was clickable””</p>
          </div>
        </div>


        <CSTitleParagraph largetitle={"Using Colours to Assure Users"}
        title={"Key Improvement #1"}/>

        <div className="grid grid-cols-12">
          <div className="col-span-6"><Image src="/images/mockups_colindicator.png"
              width={400}
              height={300}
              alt="Colour indicators"/></div>
          <div className="col-span-6">
          <p className="text-[#76655B] pb-2">Introduced colours to help customers notice changes in wait time.</p>
          <p className="text-[#76655B]">This change was validated in our subsequent internal department review. </p>
          </div>
        </div>

        


        <CSTitleParagraph largetitle={"Improving User Freedom + Match between System and Real World"}
        title={"Key Improvement #2"}/>
        <div className="grid grid-cols-3">
        <Image className="col-span-1" src="/images/leavequeue.png"
                width={400}
                height={300}
                alt="Leave Queue confirmation page"/>
        <Image className="col-span-2" src="/images/queuereduced.png"
                width={400}
                height={300}
                alt="Queue length reduced"/></div>
        <div>
          <p className="text-[#76655B] pb-2">Introduced colours to help customers notice changes in wait time.</p>
          <p className="text-[#76655B] pb-16">This change was validated in our subsequent internal department review. </p>
        </div>


        <CSTitleParagraph title={"Challenge #2"} largetitle={"Integrating technology into merchants’ current physical workflow"}
        paragraph={"One main user group of our application is our canteen stall vendors (referred to as merchants throughout this case study). These merchants are mostly in their late 50s to 60s, and are non-tech savvy - as self-reported. In an earlier one-day test trial (before I joined the team), they have already shown resistance towards the adoption of technology in their workflow. With the HRD pushing for the revamp and renewal of the staff canteen into a ‘digital canteen’, our team is faced with the challenge to balance the business directions of the company with the needs and comfortability of our merchants."}
        />
         <div className="border-[#76655B] border-l-4 px-4 leading-relaxed mb-16">
          <p className="text-[#76655B] font-semibold">How can we integrate technology into non-tech savvy merchants’ current workflow to optimise service efficiency?</p>
        </div>

        <CSTitleParagraph title={"Key Improvementsfor Challenge #2"} largetitle={"Design Principles for Merchant App"}/>
        <div>
          <p className="text-[#76655B] pb-2">There were 2 main design principles I used to design the Merchant app:</p>
          <p className="text-[#76655B] pb-2">1. Elderly-friendly; 2. Prioritise main function of managing virtual queue</p>
          <div className="grid grid-cols-3">
            <div className="col-span-1">
            </div>
            <div className="col-span-2">
              <p className="text-[#76655B] pb-2">Catering to our elderly Mandarin-speaking merchants, design decisions included:</p>
              <ul>
                <li>choosing large, readable fonts</li>
                <li>a large primary button for main function (explained below)</li>
                <li>reducing jargons by using simple phrases</li>
                <li>programming multilingual translation capabilities.</li>
              </ul>
              <p className="text-[#76655B] pb-2">For functionality, we kept in mind the need to optimise work efficiency by minimising the change in merchants’ original workflow. Intentional design decisions were made to prioritise the main function of managing a virtual queue - to call the next group of customers. Hence, the main working screen was designed with great emphasis on a large button to call the next group of customers, making it easier for our merchants to recall, learn and adopt our technology. </p>
            </div>
          </div>

          <p className="text-[#76655B] pb-2">After a quick user testing, we noticed that our merchants often feel hurried to call the next batch, clicking on the button multiple times. Thus, we also programmed a button time-out (to prevent double clicking when rushing orders).</p>
        </div>




      </div>

    


      <div className="container mt-24 mx-auto py-4 px-12">
      <Footer/>
      </div>
    
    </main>
  )
}