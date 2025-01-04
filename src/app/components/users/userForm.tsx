'use client'
import { User } from "@/share/models/user";

export interface UserFormProps {
    user: Partial<User>; 
    onChange: (user: Partial<User>) => void;
    save: () => void;
    cancel: () => void;
    delete: () => void;
}

export default function UserForm(props: UserFormProps) {
    return (
        <div className="flex flex-col gap-5">
            <label>Nome: </label>
            <input type="text" className="inputs" value={props.user.name}
                    onChange={e => props.onChange({ ...props.user, name: e.target.value})}/>

            <label>CPF: </label>
            <input type="text" className="inputs" value={props.user.cpf}
                    onChange={e => props.onChange({ ...props.user, cpf: e.target.value})}/>

            <label>Telefone: </label>
            <input type="text" className="inputs" value={props.user.phone}
                    onChange={e => props.onChange({ ...props.user, phone: e.target.value})}/>

            <label>E-mail: </label>
            <input  type="email" className="inputs" value={props.user.email}
                    onChange={e => props.onChange({ ...props.user, email: e.target.value})}/>

            <label>Nacionalidade: </label>
            <input type="text" className="inputs" value={props.user.nacionality}
                    onChange={e => props.onChange({ ...props.user, nacionality: e.target.value})}/>

            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button className="bg-green-500 px-4 py-2 rounded-md" onClick={props.save}>Salvar</button>
                    <button className="bg-zinc-500 px-4 py-2 rounded-md" onClick={props.cancel}>Cancelar</button>
                </div>
                <button className="bg-red-500 px-4 py-2 rounded-md" onClick={props.delete}>Excluir</button>
            </div>
        </div>
    )
}
