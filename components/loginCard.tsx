import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {FormEvent, useState} from "react";
import {useGlobalConfig, userLogIn} from "@/components/globalConfigContext";

export default function LoginCard(){
  const [userId, setUserId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const isValid = userId.length>0 && password.length>0

  const {config, dispatch} = useGlobalConfig()

  if(config.isLoggedIn){
    return <></>
  }
  return (
    <Card className={"w-[350px] mt-24"}>
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>Input any user id and password</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={submitHandler}>
          <div className={"flex flex-col space-y-6"}>
            <div>
              <Label htmlFor={"user_id"}>User Id</Label>
              <Input id={"user_id"} placeholder={"type in your user id"}
                     value={userId} onChange={e => setUserId(e.target.value)}/>
            </div>
            <div>
              <Label htmlFor={"password"}>Password</Label>
              <Input type={"password"} id={"password"} placeholder={"type in your password"}
                value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <Button className={""} type={"submit"} disabled={!isValid}>Log in</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )

  function submitHandler(event: FormEvent){
    event.preventDefault()
    userLogIn(dispatch, userId, password)
  }
}