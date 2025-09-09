export default function ExportButton({ classname, onclick }: { classname: string; onclick?: () => void }) {
  return (
    <button onClick={onclick} className={classname}>
      Export CSV
    </button>
  );
}
