import { useRouter } from "next/navigation";

const useMoveBack = () => {
    const router = useRouter();
    return () => router.back();
}

export default useMoveBack;
