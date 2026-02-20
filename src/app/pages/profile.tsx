export function Profile() {
  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Szczegóły konta</h1>

      <div className="border rounded-lg p-6 space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Nazwa użytkownika</p>
          <p className="font-medium">demo_user</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="font-medium">demo@email.com</p>
        </div>

        <div className="pt-4 border-t">
          <button className="px-4 py-2 border rounded-md">
            Zmień hasło
          </button>
        </div>
      </div>
    </div>
  );
}
