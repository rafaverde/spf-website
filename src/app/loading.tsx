export default function LoadingPage() {
  return (
    <div className="bg-background flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="border-primary border-t-muted h-8 w-8 animate-spin rounded-full border-4" />
        <p className="text-muted-foreground animate-pulse text-sm">
          Carregando...
        </p>
      </div>
    </div>
  );
}
