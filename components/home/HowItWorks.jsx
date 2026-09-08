import Link from "next/link";
import { MessagesSquare, ListChecks, Send, PlaneTakeoff } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "Tell us where you stand",
    desc: "Your marks, budget, English score and the gap years if you have any. Nothing is disqualifying until we look at it together.",
    duration: "About 30 minutes",
  },
  {
    icon: ListChecks,
    title: "Get an honest shortlist",
    desc: "Courses split into safe, likely and ambitious, with the entry bar and total cost written next to each one.",
    duration: "2 to 3 days",
  },
  {
    icon: Send,
    title: "Apply and collect offers",
    desc: "We prepare the applications, chase the universities and keep you posted on which file is sitting where.",
    duration: "4 to 8 weeks",
  },
  {
    icon: PlaneTakeoff,
    title: "Visa, then departure",
    desc: "Financial documents, mock interviews, and once the stamp is in, accommodation and arrival support.",
    duration: "6 to 12 weeks",
  },
];

export default function HowItWorks() {
  return (
    <section className=" py-20 lg:py-28">
      <div className="wrapper px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Four steps, and you always know which one you are on
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            No file sits in a drawer waiting for a follow-up call. Here is the
            whole route, with the time each stage usually takes.
          </p>
        </div>

        <div className="relative mt-16">
          {/* মোবাইলে খাড়া রেখা, বড় স্ক্রিনে আড়াআড়ি */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-7 top-6 border-l-2 border-dashed border-border lg:inset-x-[12.5%] lg:bottom-auto lg:left-auto lg:top-7 lg:border-l-0 lg:border-t-2"
          />

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map(({ icon: Icon, title, desc, duration }, index) => (
              <li
                key={title}
                className="flex gap-5 lg:flex-col lg:items-center lg:text-center"
              >
                {/* বৃত্তের bg-surface রেখাটাকে ঢেকে দেয় */}
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-surface text-primary-dark">
                  <Icon size={22} />
                </span>

                <div className="lg:mt-6">
                  <p className="text-sm font-semibold text-primary-dark">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed lg:mx-auto lg:max-w-[260px]">
                    {desc}
                  </p>
                  <p className="mt-4 inline-block rounded-full bg-white px-3 py-1.5 text-xs font-medium text-body">
                    {duration}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 text-center">
          <Link href="/counseling" className="btn btn-primary">
            Start with a free profile check
          </Link>
          <p className="mt-3 text-sm">
            No charge for the first call, and no obligation to sign up.
          </p>
        </div>
      </div>
    </section>
  );
}