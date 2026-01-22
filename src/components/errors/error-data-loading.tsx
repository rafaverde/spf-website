import { RiLinkUnlinkM } from "@remixicon/react";

export default function ErrorDataLoading({
  errorTitle,
}: {
  errorTitle?: string;
}) {
  return (
    <div className="mx-auto flex h-100 max-w-[50%] flex-col items-center justify-center gap-2 text-center">
      <RiLinkUnlinkM className="text-spf-green-500 size-12" />
      {errorTitle ? (
        errorTitle
      ) : (
        <p className="max-w-[80%]">
          Se produjo un error y los datos no se cargaron correctamente.
          Inténtalo de nuevo más tarde.
        </p>
      )}
    </div>
  );
}
