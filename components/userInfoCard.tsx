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
import {useGlobalConfig} from "@/components/globalConfigContext";

export default function UserInfoCard(){
  const {config, dispatch} = useGlobalConfig()

  if(!config.isLoggedIn){
    return <></>
  }
  return (
    <Card className={"w-[350px] mt-24"}>
      <CardHeader>
        <CardTitle>User Info</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={"flex flex-col space-y-6"}>
          <div className={""}>
            <Label className={" font-bold"} htmlFor={"user_id"}>User Id</Label>
            <p className={"px-4 py-2"} id={"user_id"}>{config.userId}</p>
          </div>
          <div className={""}>
            <Label className={" font-bold"} htmlFor={"password"}>Password</Label>
            <p className={"px-4 py-2"} id={"password"}>{config.password}</p>
          </div>
          <div className={""}>
            <Label className={" font-bold"} htmlFor={"email"}>Email</Label>
            <p className={"px-4 py-2"} id={"email"}>{config.email? config.email: `No email added`}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )

}