import { useState, useEffect, useRef } from "react";
import AddDiary from "../AddDiary/AddDiary";
import "./MyDiarys.css";
import {IPage } from "../../types";
import { useAppSelector } from "../../Redux/hooks";
import CircularProgress from "@mui/material/CircularProgress";
import { DiaryIcon2, AddSvg, DeleteIcon } from "../../assets/svgs/svgs";
import { useNavigate } from "react-router";
import { deletePage, getPagesByDiaryId } from "../../APIService";
const DiaryPages = () => {
  const [pages, setPages] = useState<IPage[]>([]);
  const diaryId = useAppSelector((state) => state.diary.value);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const loadingIconRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  function handleAddPage() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "flex";
    }
  }
  async function handleDelete(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    const pageId = e.currentTarget.parentElement
      ? e.currentTarget.parentElement.id
      : "";
    if (await deletePage(pageId)) {
      window.location.reload();
    } else window.alert("error in deleting Page!");
  }
  function handlePageClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const pageId = e.currentTarget.id;
    setPageIdLocalAndStore(pageId);
    navigate("/page");
  }
  useEffect(() => {
    async function loadPages() {
      if (diaryId !== undefined) {
        const pages_res = await getPagesByDiaryId(diaryId);
        if (pages_res !== undefined) {
          setPages(pages_res);
          setIsLoading(false);
        }
      }
    }
    loadPages();
  }, []);

  useEffect(() => {
    if (loadingIconRef.current) {
      loadingIconRef.current.style.display = isLoading ? "block" : "none";
    }
  }, [isLoading]);
  return (
    <div className="diarys">
      {pages.map((page) => (
        <div
          id={page._id}
          className="diary-btn"
          key={page._id}
          onClick={handlePageClick}
        >
          <DiaryIcon2 className="diary-icon2 ml-3" />

          <span className="diary-name ">{page.name}</span>

          <DeleteIcon className="delete-icon" onClick={handleDelete} />
        </div>
      ))}
      <div ref={loadingIconRef} className="loading-icon">
        <CircularProgress color="inherit" />
      </div>
      <div
        onClick={handleAddPage}
        className="diary-btn-add grid grid-ratio items-center"
      >
        <div className="add-svg">
          <AddSvg />
        </div>

        <span className="span1 ml-5">Add Diary</span>
      </div>

      <AddDiary></AddDiary>
    </div>
  );
};
export default DiaryPages;
