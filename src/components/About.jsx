import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-shell py-20">

      {/* HEADING */}
      <h2 className="text-center text-5xl font-semibold text-white mb-16">
        About <span className="text-violetSoft">Me</span>
      </h2>

      <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] items-center">

        {/* LEFT BIG CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/[0.05] p-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
        >
          <p className="text-slate-300 text-lg leading-8">
            I'm a first-year B.E student in CSE (AI & Future Technologies) at Chitkara University,
            passionate about building real-world tech products. My journey in tech started with
            curiosity about how digital solutions can make an impact.
          </p>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            Currently exploring web development with React.js and Node.js, while diving deep into AI
            integration concepts including Vision, NLP, and Chatbots. I love creating user-friendly
            solutions that solve real problems.
          </p>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            When I'm not coding, you'll find me participating in hackathons, exploring startup
            ecosystems, and continuously improving my skills in web and AI.
          </p>
        </motion.div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-8">

          {[
            { value: "9.55", label: "CGPA (1st Sem)" },
            { value: "4+", label: "Projects Built" },
            { value: "1st", label: "Year Student" },
            { value: "10+", label: "Technologies" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-xl shadow-md hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all"
            >
              <h3 className="text-4xl font-bold text-violetSoft">
                {item.value}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}