import { hash } from "bcrypt"
import { IUser } from "./user";
import { CreateUserDTO } from "./user.dto";
import { UserRepository } from "./user.repository";

export interface CreateUserResponse {
  error: boolean,
  message: string,
  status: number,
}

export class UserService {
  constructor(private repository: UserRepository) {}

  async create(data: CreateUserDTO): Promise<CreateUserResponse | IUser> {
    const userAlreadyExists = await this.repository.findByEmail(data.email)
    if (userAlreadyExists) {
      return { error: true, message: "User already exists", status: 409 }
    }

    const payload = {
      ...data,
      password: await hash(data.password, 8)
    }

    const result = await this.repository.create(payload)

    return result
  }

}