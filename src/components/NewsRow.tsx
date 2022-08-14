import { FC, memo } from "react";
// import { useNavigate } from "react-router-dom";
import { News } from "../models/news";

type NewsRowProps = {
  news: News;
};

const NewsRow: FC<NewsRowProps> = ({ news }) => {
  return (
    <div className=" sm:w-[35%] sm:p-3 sm:border-2 border-gray-300 sm:space-y-4 bg-gray-200">
      <a
        className="flex flex-col justify-center items-center"
        href={news.url}
        target="_blank"
      >
        <img
          src={
            news.urlToImage ||
            `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtNTAxLjkzIDM3MC44Yy0xLjQ2ODggMC0yLjkwNjIgMC4xMTcxOS00LjM1MTYgMC4yMTg3NSAwLjgzOTg0LTUuMjE0OCAxLjI5My0xMC41NTEgMS4yOTMtMTYuMDA0IDAtNTUuMjA3LTQ0Ljc1LTk5Ljk1My05OS45NTMtOTkuOTUzLTMxLjYzNyAwLTU5Ljc2NiAxNC43NTgtNzguMDc0IDM3LjcwM2wxOTkuODcgMTk5Ljg4YzI1LjI4MS03Ljk2NDggNDMuNjI1LTMxLjUxNiA0My42MjUtNTkuNDMgMC4wMDM5MDYtMzQuNDY5LTI3Ljk0MS02Mi40MTQtNjIuNDEtNjIuNDE0eiIvPgogIDxwYXRoIGQ9Im0xODUuMTggMjc4LjY2IDU1LjgzMiA1NS44MzJjLTMwLjY4IDEyLjM5MS01Mi4zNTUgNDIuMzk4LTUyLjM1NSA3Ny41MTYgMCA0Ni4xODQgMzcuNDM4IDgzLjYyMSA4My42MjEgODMuNjIxIDAuMzk0NTMgMCAwLjc3NzM0LTAuMDIzNDM4IDEuMTY4LTAuMDI3MzQ0bC0wLjAxNTYyNSAwLjAyNzM0NGgxMjguNzFsODUuMDM1IDg1LjAzNSA0MC45MDYtNDAuOTA2LTMwMi0zMDJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=`
          }
          className=" sm:h-72  object-cover "
        />
        <h1 className="font-semibold text-lg font-serif">{news.title}</h1>
      </a>
    </div>
  );
};

NewsRow.defaultProps = {};

export default memo(NewsRow);
