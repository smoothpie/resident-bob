import nomadVisas from '../../../data/nomadVisas.json';
import ProgramPage from '@/components/ProgramPage';

export async function getStaticProps(context: any) {
  const { nomadVisaId } = context.params;

  const currentProgram = nomadVisas.find((program: any) => program.Slug === nomadVisaId);

  return {
    props: {
      currentProgram: JSON.parse(JSON.stringify(currentProgram)),
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: nomadVisas.map((program: any) => ({
      params: { nomadVisaId: program.Slug }
    })),
    fallback: true
  }
}

const NomadVisaPage = ({ currentProgram }: any) => {
  return (
    <ProgramPage currentProgram={currentProgram} />
  )
}

export default NomadVisaPage;