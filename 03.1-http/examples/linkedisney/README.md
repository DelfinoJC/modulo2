# Linkedisney

# Profile
- fullname: string
- title: string
- bio: string
- currentOccupation: string
- education: string
- certifications: string
- status: "open to work" | "closed" | "hiring"
- createdAt: date
- deletedAt: date | null

## Funcionalidades
- Deve ser possível criar um profile, passando: fullname, title, bio, currentOccupation, education, certifications
- Deve ser possível buscar todos os perfis(Com o campo deletedAt nulo)
- Deve ser possível atualizar o status
- Deve ser possível cancelar uma conta preenchendo o campo deletedAt

segue lá: https://www.linkedin.com/in/victor-de-souto-soares-4811b118a/

# Checklist Configs Iniciais

[x] - Typescript
[x] - Dotenv
[x] - Express
[x] - Mongoose


## Teste

[x] - Dummy
[x] - Stub
[x] - Spy
[x] - Fake
[x] - SUT -> System under test

[ ] - Mock
[ ] - InMemory Database
[ ] - Teste de integraçao



.test.ts
.spec.ts

// mockResolvedValue -> (return)retornar uma funcao promise(async/await)
// mockRejectedValue -> (throw)lançar um exception
// mockReturnValue -> (return) returnar uma funcao sync

# N-tier 

Apresentaçao : controller rotas
Lógica: service
Dados: Repo banco...

# Port/Adapter -> Hexagonal

Port -> Tomadas

