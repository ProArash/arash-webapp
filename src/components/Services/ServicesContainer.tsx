import ServiceCard, { IServiceCard } from './ServiceCard';

const ServicesContainer = () => {
	const services: IServiceCard[] = [
		{
			caption:
				'Ich biete professionelle Front-End Entwicklung mit modernen Technologien wie NextJS, TypeScript und TailwindCSS an. Mit NextJS erstelle ich schnelle und SEO-optimierte Webanwendungen, während TypeScript für eine sichere und skalierbare Codebasis sorgt. TailwindCSS ermöglicht es mir, benutzerfreundliche und responsive Designs schnell umzusetzen, die auf allen Geräten hervorragend aussehen.',
			num: 1,
			title: 'Front-End Entwickler',
		},
		{
			caption:
				'Ich biete robuste und skalierbare Backend-Lösungen mit NestJS, TypeScript und modernen SQL/NoSQL ORMs an. Mit NestJS entwickle ich leistungsstarke und wartbare APIs, die auf Best Practices basieren. TypeScript sorgt für eine sichere und fehlerfreie Codebasis, während ich mit SQL und NoSQL ORMs flexibel und effizient mit verschiedenen Datenbanken arbeite, um den besten Ansatz für Ihr Projekt zu wählen.',
			num: 2,
			title: 'Back-End Entwickler',
		},
	];
	return (
		<div className="grid md:grid-cols-2 grid-cols-1 justify-items-center w-full gap-5">
			{services &&
				services.map((v, i) => (
					<ServiceCard
						key={i}
						caption={v.caption}
						num={v.num}
						title={v.title}
					/>
				))}
		</div>
	);
};

export default ServicesContainer;
