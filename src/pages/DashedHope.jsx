import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

const DashedHope = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-[#76B82D] selection:text-white">
            <Header />

            <main className="container mx-auto px-6 md:px-[8%] pt-32 pb-24">
                {/* Main 2-Column Grid Wrapper */}
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* LEFT COLUMN: Article Content + Comments + Related */}
                    <div className="lg:w-2/3 w-full">
                        <motion.article
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Meta Info */}
                            <div className="flex items-center gap-3 text-sm text-gray-400 mb-6 dm-sans">
                                <span>April 22, 2025 </span>
                                <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                                <span className="text-[#76B82D] font-semibold uppercase tracking-wider">Uncategorized
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl md:text-4xl font-light leading-tight text-gray-900 mb-10 dm-sans">
                                Restoration of Dashed Hope
                                <br />
                                {/* <span className="italic font-serif text-gray-500">Trends, Challenges, and Growth Opportunities</span> */}
                            </h1>

                            {/* Featured Image */}
                            <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl">
                                {/* <img
                                    src="https://caladiumconsulting.com/wp-content/uploads/2025/03/entertainment-industry-caladium-blog-image-600x373.png"
                                    alt="Oil and Gas Industry"
                                    className="w-full h-auto object-cover"
                                /> */}

                            </div>
                            {/* <section>
                                <p>Nigeria’s construction sector is at a turning point. Demand for infrastructure, housing, and commercial spaces is rising, but high costs, regulatory hurdles, and funding constraints pose serious challenges. Still, opportunities exist for businesses that can navigate these shifts.</p>
                            </section> */}

                            {/* Article Body Content */}
                            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-12 dm-sans">
                                <section>
                                    {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-tight">
                                        Government’s Push for Infrastructure & Housing</h2> */}
                                    <p>
                                        Nigeria’s 2025 budget, officially termed the “Budget of restoration” has been aptly named given the economic challenges of the previous year and the implementation outcomes of the 2024 budget. Citizens have experienced more distress than ever before and a restoration to economic conditions before the new administration tenure would likely be a huge relief. Nigerians eagerly anticipate economic improvement and stability after a turbulent year. The year 2024 saw persistent inflationary pressures; month after month, cost of living continued to climb higher, and the people’s spending power weakened. Consumer Price Index had gone from 660.8 in January to 867.8 in December. For many, each month meant they had to stretch their income a little further just to keep up.
                                    </p>
                                    <p>
                                        The 2024 budget titled the “Budget of renewed hope” was proposed as the first budget of President Tinubu’s term developed with the objective to ensure fiscal viability and resilience, reduce high cost of living and alleviate macroeconomic pressures. However, by the end of the first year of his term, the hope of citizens was far from renewed, whatever hope remained had been lost as economic conditions in the country continued to worsen since the removal of the fuel subsidy. Nigeria experienced persistent inflation, rising from 29.90% in January 2024 to 34.8% in December 2024. Although some months saw lower values but never lower than the initial rate in January. These high inflation rates have caused a rise in fuel prices affecting other areas such as transportation, food and exchange rates. By the end of 2024, petrol prices had risen to ₦1189.12, a 76.99% increase from the value in December 2023 and food.
                                    </p>
                                    <img src="https://caladiumconsulting.com/wp-content/uploads/2025/04/image-600x157.png" alt="" className='pt-6' />

                                </section>

                                <section>
                                    {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Rising Costs & Market Volatility</h2> */}
                                    <p>Economic factors have not only affected individuals but has also aggravated business challenges especially for small business owners and SMEs; the backbone of the economy which contributes 49% to the GDP of Nigeria and employs over 86% of its workforce. According to the 2024 Caladium SME report, it is clear that SMEs have been greatly affected by macroeconomic conditions. The report reveals that 46.45% of business owners in Nigeria consider the business environment to be difficult and more than 50% of businesses make a revenue of less than ₦5 million per year, this reflects challenges with achieving profitability amidst tough macroeconomic conditions. The report further highlights the top two concerns of Nigerian business owners as being related to economic instability and access to finance. Inflation affects up to 60% of business owners whose sales are greatly reduced as a result of diminished customer spending power and more than 80% of small business in Nigeria do not have access to government funding initiatives. As a result of inflationary pressures, CBN interest rates have been significantly raised and borrowing costs deter small business owners who rely on credit funding. Although, there are growing channels for funding such as grants, concessional loans and support from organizations, affordable finance remains a wide gap for SMEs. Poor infrastructure is another area of concern for many SMEs, limited power supply and poor transportation affects 15.72% of SMEs causing them to spend up to 40% of their overheads on power generation, this has made fuel and energy cost the second largest cost area for businesses after sourcing of raw materials. This cost exceeds even business spending on salaries. Bearing these insights in mind, Nigeria’s 2025 budget’s promise of restoration is equally of significant concern to small businesses and enterprises all over the country.

                                    </p>
                                    <p>
                                        The proposed 2025 budget is ₦49.74 trillion, with a revenue target of ₦36.35 trillion, leaving a budget deficit of ₦13.39 trillion, which will be financed through asset sales, multilateral loans and debt financing. This budget allocation is 73% more than the ₦28.78 trillion budget of 2024. Although this appears to be a significant increase in terms of naira, Nigeria’s budget in U.S. dollars stands at $31.88 billion, which is insignificant considering the country’s population and economic challenges. When compared to the $38.07 billion budget of Angola— another oil-exporting African country with a much smaller population, it is a wonder that Nigeria’s budget does not by far exceed its current value. Nigeria has also been classified as a MINT country with countries like Mexico, Indonesia and Turkey considered to have high potential for economic growth. Nigeria stands as the country with the lowest budget in dollars amongst these whose budgets are set over $400 billion
                                    </p>

                                <img src="https://caladiumconsulting.com/wp-content/uploads/2025/04/image-3-600x178.png" alt="" className='pt-10' />
                                <img src="https://caladiumconsulting.com/wp-content/uploads/2025/04/image-1-600x157.png" alt="" className='pt-6' />
                                </section>
                                <section>
                                    {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Rising Costs & Market Volatility</h2> */}
                                    <p>Budget expenditure in 2024 was set at ₦28.78 trillion of which 70% was directed towards personnel costs and debt servicing. This trend has continued with the 2025 budget where significant portions of allocation have gone towards personnel costs and debt servicing despite the supposed effort of government to reduce spending on personnel. In the 2025 budget, expenditure towards debt servicing and statutory transfers doubled over their value in the 2024 budget. Capital expenditure allocation still remain below reasonable values, so it is expected that investments towards infrastructure development will continue to suffer. On the other hand, Nigeria seems to be sinking deeper and deeper into debt; debt servicing in 2025 was increased from ₦8.27 trillion in the previous year to ₦16.33 trillion. The country’s budget over the years have been deficit budgets which are financed by even more borrowing. Nigeria’s public debt as at September 2024 was ₦142.3 trillion; quick and proper resolution these debts will require proper balancing of our budget and increased effort to achieve economic growth. Long term actions towards this purpose will allow government redirect its spending to critical sectors of economic development

                                    </p>
                                    <p>
                                        The approved 2024 budget had government revenue set at ₦19.6 trillion with a forecasted quarterly inflow of ₦4.9 trillion, in the first quarter of 2024, the inflow stood at 3.6 trillion which was below the expected value by ₦1.3trillion. This was as a result of shortfall in the performance of oil revenues alongside other revenue streams such as customs, GOEs, TETFUND, independent revenue and others. In the following quarter, oil revenue still remained below estimated values as well as revenue from Federal account levies, signature bonuses and GOE retained revenue; the highlighted areas performed poorly in the first two quarters of 2024. The 2025 proposed revenue set at ₦36.35 trillion which is an 85.46% increase on the previous year may be unrealistic considering the revenue performance of the previous year. Nigeria’s heavy reliance on oil revenues for fiscal sustainability must be addressed, our budget continues to overestimate revenue on oil production meanwhile oil revenues, production and prices have continued to decline.  If this ambitious revenue will be achieved new streams must be considered and those with consistently higher performance should be developed
                                        further; these streams include company income tax, stamp duties, grants and donors as well as revenue from minerals and mining.
                                    </p>
                                    <p>
                                        In terms of sectoral analysis for the 2025 budget, defense & security and education have been given highest allocations with provisions of ₦6.57 trillion and ₦3.54 trillion respectively. However, overall sectoral provision seem to be inadequate, UNESCO requires that allocations to education should be at least 15 to 20% of the national budget. Nigeria has not met this condition for the past few years and the current allocation makes up just 7.12% which is less than 7.9% from the previous year. Furthermore, provisions for other key sectors such the health, agriculture and social development sectors have reduced compared to 2024. The percentage values in the 2024 for these sectors were 5%, 1.32% and 2% while the proposed values for 2025 on the other hand are 4.81%, 1.30%, 1.08%. Additionally, a significant sector to zone into is infrastructure; Nigeria’s infrastructure remains dilapidated, plagued by poor road networks, unreliable electricity and water supply all of which hinder economic growth and quality of life for citizens. Despite this, government budget allocation to infrastructure reduced from $2.55 billion in 2024 to $2.47 billion in 2025. Nigeria has continued to experience challenges with power supply for years while other African countries have moved on from conversations around poor electricity. Nigeria’s national grid collapsed up to 12 times in the past year, with continued implications for both citizens and economic productivity. In response, substantial allocation has been redirected to the power sector in order to build stability, rising from $559.83 million to $1.4 billion. However, it is obvious that these numbers still don’t stand a chance to transform the power sectors. There are hardly sectors that require less expenditure than before, as many had not reached appropriate funding levels in previous years. Critical sectors continue to demand increased funding due to years of underfunding and economic pressures.
                                    </p>

                                <img src="https://caladiumconsulting.com/wp-content/uploads/2025/04/image-4-600x157.png" alt="" className='pt-6' />
                                
                                </section>
                                <section>
                                    {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-tight">Rising Costs & Market Volatility</h2> */}
                                    <p>Going back to the earlier reference to macroeconomic effects faced by SMEs, SMEDAN, the Small and Medium Enterprises Development Agency has announced its plans to disburse up to ₦1 billion grant to SMEs to support economic growth. This is a commendable initiative by the agency; however, it is not the first of its kind to be announced without proper implementation. In 2024, only 12.63% of business owners were able to take advantage of funding initiatives despite their communicated availability. This highlights the subject of budget implementation, it is not enough to make plans without ensuring proper implementation. For a budget to achieve its set objectives, it must be well designed, adequately implemented and monitored. Additionally, the performance of the budget must also be evaluated and properly reported. The first quarter of the year is already gone and yet there is no evidence of critical spending in line with the provisions of the 2025 budget, although quarterly implementation reports have been published more consistently by the Budget Office of the Federation since 2021, there are still several challenges related to capital expenditure implementation. A report by the Collaborative Africa Budget Reform Initiative (CABRI) in 2023, showed that up to 56,000 projects worth over 12 trillion have been abandoned. This is due to non-release of funds, corruption, and a lack of continuity in policies and project execution. These challenges arise from persistent systemic failures and poor institutional capabilities that must be addressed if we will experience progress, this requires a government committed to budget implementation and largely devoid of corruption to ensure that every allocation is adequately directed and spent to achieve set objectives. However, with our current government structure and personnel, we may still struggle with proper implementation and execution.

                                    </p>
                                    <p>
                                        With this analysis of the 2025 budget, it is clear that we still have a long way to go as a country. Year in year out we analyze and talk about the same issues and challenges and see no significant results. There are clearly repeated patterns, lessons to be learned and difficult actions to take if Nigeria will truly emerge as the giant that she ought to be. Till then we will await the next budget, contribute our quota and hope for true economic and social restoration.
                                    </p>
                                    <p>
                                        In terms of sectoral analysis for the 2025 budget, defense & security and education have been given highest allocations with provisions of ₦6.57 trillion and ₦3.54 trillion respectively. However, overall sectoral provision seem to be inadequate, UNESCO requires that allocations to education should be at least 15 to 20% of the national budget. Nigeria has not met this condition for the past few years and the current allocation makes up just 7.12% which is less than 7.9% from the previous year. Furthermore, provisions for other key sectors such the health, agriculture and social development sectors have reduced compared to 2024. The percentage values in the 2024 for these sectors were 5%, 1.32% and 2% while the proposed values for 2025 on the other hand are 4.81%, 1.30%, 1.08%. Additionally, a significant sector to zone into is infrastructure; Nigeria’s infrastructure remains dilapidated, plagued by poor road networks, unreliable electricity and water supply all of which hinder economic growth and quality of life for citizens. Despite this, government budget allocation to infrastructure reduced from $2.55 billion in 2024 to $2.47 billion in 2025. Nigeria has continued to experience challenges with power supply for years while other African countries have moved on from conversations around poor electricity. Nigeria’s national grid collapsed up to 12 times in the past year, with continued implications for both citizens and economic productivity. In response, substantial allocation has been redirected to the power sector in order to build stability, rising from $559.83 million to $1.4 billion. However, it is obvious that these numbers still don’t stand a chance to transform the power sectors. There are hardly sectors that require less expenditure than before, as many had not reached appropriate funding levels in previous years. Critical sectors continue to demand increased funding due to years of underfunding and economic pressures.
                                    </p>

                                <img src="https://caladiumconsulting.com/wp-content/uploads/2025/04/image-4-600x157.png" alt="" className='pt-6' />
                                
                                </section>
                                <section>
                                    <p>
                                        Going back to the earlier reference to macroeconomic effects faced by SMEs, SMEDAN, the Small and Medium Enterprises Development Agency has announced its plans to disburse up to ₦1 billion grant to SMEs to support economic growth. This is a commendable initiative by the agency; however, it is not the first of its kind to be announced without proper implementation. In 2024, only 12.63% of business owners were able to take advantage of funding initiatives despite their communicated availability. This highlights the subject of budget implementation, it is not enough to make plans without ensuring proper implementation. For a budget to achieve its set objectives, it must be well designed, adequately implemented and monitored. Additionally, the performance of the budget must also be evaluated and properly reported. The first quarter of the year is already gone and yet there is no evidence of critical spending in line with the provisions of the 2025 budget, although quarterly implementation reports have been published more consistently by the Budget Office of the Federation since 2021, there are still several challenges related to capital expenditure implementation. A report by the Collaborative Africa Budget Reform Initiative (CABRI) in 2023, showed that up to 56,000 projects worth over 12 trillion have been abandoned. This is due to non-release of funds, corruption, and a lack of continuity in policies and project execution. These challenges arise from persistent systemic failures and poor institutional capabilities that must be addressed if we will experience progress, this requires a government committed to budget implementation and largely devoid of corruption to ensure that every allocation is adequately directed and spent to achieve set objectives. However, with our current government structure and personnel, we may still struggle with proper implementation and execution.
                                    </p>
                                    <p className='dm-sans pt-5 block'>
                                        With this analysis of the 2025 budget, it is clear that we still have a long way to go as a country. Year in year out we analyze and talk about the same issues and challenges and see no significant results. There are clearly repeated patterns, lessons to be learned and difficult actions to take if Nigeria will truly emerge as the giant that she ought to be. Till then we will await the next budget, contribute our quota and hope for true economic and social restoration.
                                    </p>
                                </section>

                                {/* <section className="bg-gray-50 p-8 rounded-xl border-l-4 border-[#76B82D]">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Want More Insights?</h3>
                                    <p className="mb-4">For a deeper analysis of Nigeria's oil and gas trends, download our 2024 Factsheet.</p>
                                    <button className="font-bold text-[#76B82D] hover:underline">[Download it here]</button>
                                </section> */}
                            </div>
                        </motion.article>

                        {/* WRITTEN BY SECTION - START */}
                        <section className="mt-12 pt-2 border-t border-gray-100 dm-sans">
                            <p className="text-xl font-bold text-gray-500 mb-8 italic">Written by:</p>
                            
                            <div className="space-y-10">
                                {/* Author 1 */}
                                <div className="flex items-center gap-6">
                                    <img 
                                        src="https://caladiumconsulting.com/wp-content/uploads/2025/04/image-7.png" 
                                        alt="Ayo Bankole Akintujoye" 
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">Ayo Bankole Akintujoye</h4>
                                        <p className="text-gray-500 text-sm">Lead Strategist/CEO, Caladium Consulting</p>
                                    </div>
                                </div>

                                {/* Author 2 */}
                                <div className="flex items-center gap-6">
                                    <img 
                                        src="https://caladiumconsulting.com/wp-content/uploads/2025/04/image-6.png" 
                                        alt="Iyanuoluwa Ogundipe" 
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">Iyanuoluwa Ogundipe</h4>
                                        <p className="text-gray-500 text-sm">Strategy Analyst, Caladium Consulting</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* WRITTEN BY SECTION - END */}

                        {/* COMMENT SECTION */}
                        <section className="mt-16 pt-16 border-t border-gray-100">
                            <h2 className="text-3xl font-light text-gray-900 mb-8 dm-sans">Leave a comment</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-900 mb-2">Your Comment *</label>
                                    <textarea rows={6} className="w-full border border-gray-500 p-4 focus:border-[#76B82D] outline-none transition-colors" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Your Name *" className="border border-gray-500 p-3 focus:border-[#76B82D] outline-none" />
                                    <input type="email" placeholder="Your Email *" className="border border-gray-500 p-3 focus:border-[#76B82D] outline-none" />
                                    <input type="text" placeholder="Your Website *" className="border-gray-200 border-b p-3 focus:border-[#76B82D] outline-none" />
                                </div>
                                <button className="bg-[#1a1a1a] text-white px-8 dm-sans py-3 font-bold hover:bg-[#76B82D] transition-all">Send</button>
                            </form>
                        </section>

                        {/* RELATED POSTS */}
                        <section className="mt-24">
                            <h2 className="text-3xl font-light text-gray-900 mb-12 dm-sans">You may also like</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="group">
                                    <img src="https://caladiumconsulting.com/wp-content/uploads/2025/03/entertainment-industry-caladium-blog-image-600x373.png" className="rounded-lg  mb-4" alt="Related" />
                                    <p className='text-gray-600 pb-6 text-sm'>Uncategorized</p>
                                    <h3 className="text-xl text-zinc-900 dm-sans font-medium ">Nigeria’s Entertainment Industry in 2024: Trends, Challenges, and Growth Opportunities</h3>
                                    <Link to="/blogs-det" className="text-sm text-[#76B82D] dm-sans font-bold mt-4 inline-block">Read More</Link>
                                </div>
                                <div className="group">
                                    <img src="https://caladiumconsulting.com/wp-content/uploads/2025/03/oilandgas-blog-image-600x363.png" className="rounded-lg  mb-4" alt="Related" />
                                      <p className='text-gray-600 pb-6 text-sm'>Uncategorized</p>
                                    <h3 className="text-xl text-zinc-900 dm-sans font-medium ">Nigeria’s Oil & Gas Industry in 2024: Growth, Challenges, and Future Prospects</h3>
                                    <Link to="/blogs-detail" className="text-sm text-[#76B82D] dm-sans font-bold mt-4 inline-block">Read More</Link>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: Sidebar (Sticky) */}
                    <motion.aside
                        className="lg:w-1/3 w-full lg:sticky lg:top-32 space-y-12"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Search Bar */}
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full border-b border-gray-200 py-3 pr-10 focus:outline-none focus:border-[#76B82D] transition-colors dm-sans"
                            />
                            <svg className="absolute right-0 top-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Categories Map */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-6 border-l-4 border-[#76B82D] pl-4">
                                Categories
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-600 dm-sans">
                                {[
                                    { name: 'Analysis', path: '/analysis' },
                                    { name: 'Business', path: '/business' },
                                    { name: 'Economy', path: '/economy' },
                                    { name: 'Industry', path: '/industry' },
                                    { name: 'Uncategorized', path: '/uncategorized' },
                                ].map((cat) => (
                                    <li key={cat.name} className="border-b border-gray-50 pb-2 last:border-0">
                                        <Link
                                            to={cat.path}
                                            className="hover:text-[#76B82D] cursor-pointer transition-colors flex justify-between items-center group"
                                        >
                                            <span>{cat.name}</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#76B82D] text-xs">
                                                ↗
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        {/* Latest Posts Map */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-6 border-l-4 border-[#76B82D] pl-4">Latest Posts</h4>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Restoration of Dashed Hope",
                                        date: "April 22, 2025",
                                        path: "/dashed-hope",
                                        image: "https://caladiumconsulting.com/wp-content/uploads/2025/03/entertainment-industry-caladium-blog-image-600x373.png"
                                    },
                                    {
                                        title: "Nigeria's Oil & Gas Industry in 2024",
                                        date: "March 14, 2025",
                                        path: "/blogs-detail",
                                        image: "https://caladiumconsulting.com/wp-content/uploads/2025/03/oilandgas-blog-image-600x363.png"
                                    },
                                    {
                                        title: "Nigeria's Entertainment Industry in 2024",
                                        date: "March 14, 2025",
                                        path: "/blogs-det",
                                        image: "https://caladiumconsulting.com/wp-content/uploads/2025/03/entertainment-industry-caladium-blog-image-600x373.png"
                                    }
                                ].map((post, index) => (
                                    <Link key={index} to={post.path} className="flex gap-4 group items-start">
                                        {/* Thumbnail */}
                                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                                            <img
                                                src={post.image}
                                                alt=""
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        {/* Text content */}
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 mb-1">{post.date}</span>
                                            <h5 className="text-[13px] font-medium leading-tight text-gray-800 group-hover:text-[#76B82D] transition-colors">
                                                {post.title}
                                            </h5>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.aside>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DashedHope;