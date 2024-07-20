import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

export function WorkCard(props:
    {
        company: string;
        title: string;
        period: string;
        description: string;
        skills: string[];
    }) {

    return (
        <Card className="drop-shadow-lg my-5 text-justify">
            <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                    <CardTitle>{props.company}</CardTitle>
                    <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                        {props.period}
                    </div>
                </div>
                <CardDescription>{props.title}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{props.description}</p>
            </CardContent>
            <CardFooter className="inline-block group">
                {props.skills.map((label, i) => {
                    return (
                        <Badge variant="secondary" key={i} className="m-1">{label}</Badge>
                    )
                })}
            </CardFooter>
        </Card>
    )
}