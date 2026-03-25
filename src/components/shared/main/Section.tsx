

interface SectionProps {
  title?: string;
  content?: React.ReactNode;
}

export default function  Section({ title, content }: SectionProps){
    return(<>
        <section className="mb-3">
          <h2 className="text-2xl font-bold text-amber-300">
            { title }
          </h2>
          <p className="italic mt-1 ">
            "{ content }"
          </p>
        </section>
    </>)
}      